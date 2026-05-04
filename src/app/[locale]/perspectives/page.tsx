import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { essays } from '@/content/perspectives';
import type { Locale } from '@/i18n/request';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'perspectivesPage' });
  return { title: t('title') };
}

export default async function PerspectivesPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'perspectivesPage' });
  const locale = params.locale as Locale;
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">{t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('lead')}</h1>

      <div className="mt-16 grid gap-px bg-line md:grid-cols-1 lg:grid-cols-3">
        {essays.map((e) => (
          <Link
            key={e.slug}
            href={`/${locale}/perspectives/${e.slug}`}
            className="group block bg-bg p-8 transition-colors hover:bg-bg-elev"
          >
            <span className="ref-code">{e.date}</span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight">{e.title[locale]}</h2>
            <p className="mt-4 text-base text-ink-dim">{e.dek[locale]}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase text-accent">
              {locale === 'ar' ? 'اقرأ' : 'Read'} <span className="arrow-rtl-flip">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
