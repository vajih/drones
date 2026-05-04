import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { essays, getEssay } from '@/content/perspectives';
import type { Locale } from '@/i18n/request';

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const e = getEssay(params.slug);
  if (!e) return {};
  return { title: e.title[params.locale as Locale] };
}

export default function EssayPage({ params }: { params: { locale: string; slug: string } }) {
  setRequestLocale(params.locale);
  const essay = getEssay(params.slug);
  if (!essay) notFound();
  const locale = params.locale as Locale;
  return (
    <article className="container-content max-w-[760px] pb-24 pt-32">
      <Link href={`/${locale}/perspectives`} className="text-xs uppercase text-ink-dim hover:text-accent">
        ← {locale === 'ar' ? 'رؤى' : 'Perspectives'}
      </Link>
      <header className="mt-8 grid gap-6">
        <span className="ref-code">{essay.date}</span>
        <h1 className="display-h1 text-[clamp(2.2rem,5vw,4rem)]">{essay.title[locale]}</h1>
        <p className="text-xl leading-snug text-ink-dim">{essay.dek[locale]}</p>
      </header>
      <div className="mt-12 grid gap-6 border-t border-line pt-12 text-lg leading-relaxed">
        {essay.body[locale].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
