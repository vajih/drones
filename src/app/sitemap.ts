import type { MetadataRoute } from 'next';
import { products, families } from '@/content/products';
import { essays } from '@/content/perspectives';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://sterlingautonomoussystems.com';

const STATIC_PATHS = [
  '',
  'platform',
  'platform/manufacturing',
  'portfolio',
  'missions',
  'strategy',
  'partnership',
  'leadership',
  'perspectives',
  'press',
  'compliance',
  'engage',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];
  for (const locale of ['en', 'ar'] as const) {
    for (const p of STATIC_PATHS) {
      out.push({ url: `${BASE}/${locale}${p ? `/${p}` : ''}`, lastModified: now });
    }
    for (const f of families) {
      out.push({ url: `${BASE}/${locale}/portfolio/${f}`, lastModified: now });
    }
    for (const product of products) {
      out.push({ url: `${BASE}/${locale}/portfolio/${product.family}/${product.slug}`, lastModified: now });
    }
    for (const e of essays) {
      out.push({ url: `${BASE}/${locale}/perspectives/${e.slug}`, lastModified: new Date(e.date) });
    }
  }
  return out;
}
