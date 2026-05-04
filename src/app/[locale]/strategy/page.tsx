import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'strategyPage' });
  return { title: t('title') };
}

export default async function StrategyPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'strategyPage' });
  const theses = [
    { h: t('t1H'), p: t('t1P') },
    { h: t('t2H'), p: t('t2P') },
    { h: t('t3H'), p: t('t3P') },
  ];
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">{t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('lead')}</h1>
      <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
        {theses.map((x, i) => (
          <div key={i} className="bg-bg p-8">
            <span className="label-mono">0{i + 1}</span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight">{x.h}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-dim">{x.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
