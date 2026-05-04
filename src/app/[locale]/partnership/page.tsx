import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'partnershipPage' });
  return { title: t('title') };
}

export default async function PartnershipPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'partnershipPage' });
  const tn = await getTranslations({ locale: params.locale, namespace: 'common' });
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">{t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('lead')}</h1>
      <section className="mt-16 border-t border-line pt-12">
        <h2 className="label-mono">{t('engagementH')}</h2>
        <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('engagementP')}</p>
      </section>
      <div className="mt-12">
        <Link href={`/${params.locale}/engage`} className="btn-primary group">
          {tn('engageCta')} <span className="arrow-rtl-flip">→</span>
        </Link>
      </div>
    </div>
  );
}
