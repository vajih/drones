import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'training' });
  return { title: t('title') };
}

export default async function TrainingPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'training' });
  const tn = await getTranslations({ locale: params.locale, namespace: 'common' });

  const pillars = [
    { h: t('p1H'), p: t('p1P') },
    { h: t('p2H'), p: t('p2P') },
    { h: t('p3H'), p: t('p3P') },
    { h: t('p4H'), p: t('p4P') },
    { h: t('p5H'), p: t('p5P') },
  ];

  const infra = [
    { h: t('i1H'), p: t('i1P') },
    { h: t('i2H'), p: t('i2P') },
    { h: t('i3H'), p: t('i3P') },
  ];

  const phases = [
    { h: t('ph1H'), p: t('ph1P') },
    { h: t('ph2H'), p: t('ph2P') },
    { h: t('ph3H'), p: t('ph3P') },
  ];

  return (
    <div className="container-content pb-24 pt-32">
      <Reveal>
        <span className="label-mono">{t('kicker')} · {t('title')}</span>
        <h1 className="display-h1 mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('h1')}</h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-ink-dim">{t('lead')}</p>
      </Reveal>

      <section className="mt-20 border-t border-line pt-12">
        <Reveal>
          <span className="label-mono">{t('pillarsKicker')}</span>
          <h2 className="display-h2 mt-4 max-w-[26ch] text-[clamp(1.8rem,3.4vw,3rem)]">{t('pillarsH')}</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((x, i) => (
            <StaggerItem key={i}>
              <div className="h-full bg-bg p-8">
                <span className="label-mono">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold leading-tight">{x.h}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-dim">{x.p}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <Reveal>
          <span className="label-mono">{t('infraKicker')}</span>
          <h2 className="display-h2 mt-4 max-w-[26ch] text-[clamp(1.8rem,3.4vw,3rem)]">{t('infraH')}</h2>
          <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('infraP')}</p>
        </Reveal>
        <Stagger className="mt-12 grid gap-px bg-line md:grid-cols-3">
          {infra.map((x, i) => (
            <StaggerItem key={i}>
              <div className="h-full bg-bg p-8">
                <span className="label-mono">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{x.h}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-dim">{x.p}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <Reveal>
          <span className="label-mono">{t('phasesKicker')}</span>
          <h2 className="display-h2 mt-4 max-w-[26ch] text-[clamp(1.8rem,3.4vw,3rem)]">{t('phasesH')}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-px bg-line md:grid-cols-3">
          {phases.map((x, i) => (
            <li key={i} className="bg-bg p-8">
              <span className="label-mono">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{x.h}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-dim">{x.p}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <Reveal>
          <span className="label-mono">{t('closingKicker')}</span>
          <h2 className="display-h2 mt-4 max-w-[26ch] text-[clamp(1.8rem,3.4vw,3rem)]">{t('closingH')}</h2>
          <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-ink-dim">{t('closingP')}</p>
          <div className="mt-10">
            <Link href={`/${params.locale}/engage`} className="btn-primary group">
              {tn('engageCta')} <span className="arrow-rtl-flip">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
