import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { families, productsByFamily, type Family } from '@/content/products';
import { pick } from '@/lib/i18n';
import type { Locale } from '@/i18n/request';

export function generateStaticParams() {
  return families.map((family) => ({ family }));
}

export async function generateMetadata({ params }: { params: { locale: string; family: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'families' });
  if (!families.includes(params.family as Family)) return {};
  return { title: t(params.family as Family) };
}

export default async function FamilyPage({
  params,
}: {
  params: { locale: string; family: string };
}) {
  setRequestLocale(params.locale);
  if (!families.includes(params.family as Family)) notFound();
  const family = params.family as Family;
  const items = productsByFamily(family);
  const tf = await getTranslations({ locale: params.locale, namespace: 'families' });
  const td = await getTranslations({ locale: params.locale, namespace: 'domains' });

  return (
    <div className="container-content pb-24 pt-32">
      <Link href={`/${params.locale}/portfolio`} className="text-xs uppercase text-ink-dim hover:text-accent">
        ← {params.locale === 'ar' ? 'المحفظة' : 'Portfolio'}
      </Link>
      <h1 className="display-h1 mt-6 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{tf(family)}</h1>
      <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
        {items.map((p) => (
          <Link
            key={p.code}
            href={`/${params.locale}/portfolio/${family}/${p.slug}`}
            className="group block bg-bg p-8 transition-colors hover:bg-bg-elev"
          >
            <div className="flex items-center justify-between">
              <span className="ref-code">{p.code}</span>
              <span className="text-[11px] uppercase text-ink-faint">
                {p.domain.map((d) => td(d)).join(' · ')}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{pick(params.locale as Locale, p.codename)}</h2>
            <p className="mt-3 text-sm text-ink-dim">{pick(params.locale as Locale, p.classification)}</p>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-ink-dim">
              {pick(params.locale as Locale, p.summary)}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase text-accent">
              {params.locale === 'ar' ? 'عرض المنصّة' : 'View product'} <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
