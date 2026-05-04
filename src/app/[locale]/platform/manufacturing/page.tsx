import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { productsByFamily } from '@/content/products';
import { pick } from '@/lib/i18n';
import type { Locale } from '@/i18n/request';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'manufacturing' });
  return { title: t('title') };
}

export default async function ManufacturingPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const locale = params.locale as Locale;
  const t = await getTranslations({ locale, namespace: 'manufacturing' });
  const items = productsByFamily('manufacturing');

  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">04 · {t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('doctrineH')}</h1>
      <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('lead')}</p>

      <section className="mt-16 border-t border-line pt-12">
        <p className="max-w-[68ch] text-lg leading-relaxed">{t('doctrineP')}</p>
      </section>

      <section className="mt-12 grid gap-px bg-line md:grid-cols-2">
        {items.map((m) => (
          <Link
            key={m.code}
            href={`/${locale}/portfolio/manufacturing/${m.slug}`}
            className="group block bg-bg p-8 transition-colors hover:bg-bg-elev"
          >
            <div className="flex items-center justify-between">
              <span className="ref-code">{m.code}</span>
              <span className="text-[11px] uppercase text-ink-faint">{pick(locale, m.classification).split('·')[0]}</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">{pick(locale, m.codename)}</h3>
            <p className="mt-3 max-w-[60ch] text-sm text-ink-dim">{pick(locale, m.summary)}</p>
          </Link>
        ))}
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="display-h2 max-w-[26ch] text-[clamp(1.8rem,3vw,2.6rem)]">{t('scaleH')}</h2>
        <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('scaleP')}</p>
      </section>
    </div>
  );
}
