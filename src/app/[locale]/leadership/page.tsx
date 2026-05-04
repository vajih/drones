import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'leadershipPage' });
  return { title: t('title') };
}

export default async function LeadershipPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'leadershipPage' });
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">{t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('lead')}</h1>

      <section className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-[280px_1fr]">
        <div>
          <div className="aspect-[3/4] border border-line bg-bg-card" aria-hidden />
        </div>
        <div>
          <span className="label-mono">{t('khanRole')}</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{t('khanH')}</h2>
          <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-ink-dim">{t('khanBio')}</p>
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="label-mono">{t('idH')}</h2>
        <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('idP')}</p>
      </section>
    </div>
  );
}
