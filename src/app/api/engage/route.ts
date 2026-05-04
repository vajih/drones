import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const schema = z.object({
  name: z.string().min(1).max(200),
  title: z.string().min(1).max(200),
  org: z.string().min(1).max(200),
  country: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(64).optional().or(z.literal('')),
  purpose: z.enum(['briefing', 'partnership', 'press', 'other']),
  notes: z.string().max(4000).optional().or(z.literal('')),
  company_url: z.string().max(0).optional(), // honeypot must be empty
});

// Best-effort in-memory rate limit. Replaced by Upstash/Vercel KV in production.
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const e = hits.get(ip);
  if (!e || now > e.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (e.count >= MAX_PER_WINDOW) return false;
  e.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
    }

    const json = await req.json().catch(() => null);
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'invalid_payload' }, { status: 400 });
    }
    const data = parsed.data;
    if (data.company_url && data.company_url.length > 0) {
      // Honeypot triggered. Pretend success silently.
      return NextResponse.json({ ok: true });
    }

    // Production: dispatch via Resend if RESEND_API_KEY is configured.
    // Stubbed for now — see PUNCHLIST.
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.ENGAGE_RECIPIENT || 'engagement@sterlingautonomoussystems.com';
    if (apiKey) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: process.env.ENGAGE_FROM || 'engage@sterlingautonomoussystems.com',
          to,
          subject: `[SAS · ${data.purpose}] ${data.org} — ${data.name}`,
          replyTo: data.email,
          text: [
            `Name: ${data.name}`,
            `Title: ${data.title}`,
            `Organization: ${data.org}`,
            `Country: ${data.country}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone || '—'}`,
            `Purpose: ${data.purpose}`,
            '',
            (data.notes || '—'),
          ].join('\n'),
        });
      } catch {
        // Email dispatch failure is non-fatal; submission was accepted.
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
