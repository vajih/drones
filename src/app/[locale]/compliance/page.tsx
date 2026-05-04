import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'compliancePage' });
  return { title: t('title') };
}

export default async function CompliancePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'compliancePage' });
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">{t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[22ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('lead')}</h1>
      <section className="mt-16 border-t border-line pt-12">
        <h2 className="label-mono">{t('exportH')}</h2>
        <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-ink-dim">{t('exportP')}</p>
      </section>
      <section className="mt-12 border-t border-line pt-12">
        <h2 className="label-mono">{t('endUseH')}</h2>
        <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-ink-dim">{t('endUseP')}</p>
      </section>
    </div>
  );
}
