import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { CrossDomainScene } from '@/components/hero/cross-domain-scene';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { families } from '@/content/products';
import type { Locale } from '@/i18n/request';

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <Home locale={params.locale as Locale} />;
}

function Home({ locale }: { locale: Locale }) {
  const t = useTranslations('home');
  const tn = useTranslations('common');
  const tf = useTranslations('families');

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden pt-24">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-[100svh] accent-glow opacity-50" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 z-10">
          <CrossDomainScene />
        </div>
        <div className="container-content relative z-20 grid gap-10 pb-20 pt-12 md:pt-20">
          <Reveal>
            <span className="pill"><span className="pill-dot" />{t('kicker')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-h1 max-w-[20ch] text-[clamp(2.6rem,6vw,5.6rem)]">
              <span className="block">{t('h1Line1')}</span>
              <span className="block text-accent">{t('h1Line2')}</span>
              <span className="block">{t('h1Line3')}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[60ch] text-lg leading-relaxed text-ink-dim md:text-xl">
              {t('lead')}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/engage`} className="btn-primary group">
                {t('ctaPrimary')} <span className="arrow-rtl-flip">→</span>
              </Link>
              <Link href={`/${locale}/engage`} className="btn-ghost group">
                {t('ctaSecondary')} <span className="arrow-rtl-flip">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THESIS */}
      <Section kicker={t('thesisKicker')} heading={t('thesisH')}>
        <Stagger className="grid gap-8 md:grid-cols-3">
          {[t('thesisP1'), t('thesisP2'), t('thesisP3')].map((p, i) => (
            <StaggerItem key={i}>
              <p className="border-t border-line pt-6 text-base leading-relaxed text-ink-dim">{p}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* PLATFORM FAMILIES */}
      <Section kicker={t('platformKicker')} heading={t('platformH')} lead={t('platformLead')}>
        <Stagger className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {families.map((f) => (
            <StaggerItem key={f}>
              <Link
                href={`/${locale}/portfolio/${f}`}
                className="group block h-full bg-bg p-8 transition-colors hover:bg-bg-elev"
              >
                <div className="label-mono">{f.toUpperCase()}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{tf(f)}</h3>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase text-accent">
                  {tn('viewAll')} <span className="arrow-rtl-flip">→</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* MANUFACTURING - the moat */}
      <Section kicker={t('manufacturingKicker')} heading={t('manufacturingH')} lead={t('manufacturingP')}>
        <div className="grid gap-px bg-line md:grid-cols-5">
          {[
            { code: 'M1', en: 'Container · 24 hr relocation', ar: 'حاوية · إعادة تموضع 24 ساعة' },
            { code: 'M2', en: 'Rail-mobile train', ar: 'قطار متنقل بالسكك' },
            { code: 'M3', en: 'Maritime production hull', ar: 'هيكل إنتاج بحري' },
            { code: 'M4', en: 'Mesh micro-factory', ar: 'شبكة مصانع دقيقة' },
            { code: 'M5', en: 'Hardened reserve', ar: 'احتياط محصَّن' },
          ].map((m) => (
            <div key={m.code} className="bg-bg p-6">
              <div className="label-mono">SAS-{m.code}</div>
              <p className="mt-3 text-sm text-ink-dim">{locale === 'ar' ? m.ar : m.en}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href={`/${locale}/platform/manufacturing`} className="btn-ghost group">
            {tn('readMore')} <span className="arrow-rtl-flip">→</span>
          </Link>
        </div>
      </Section>

      {/* OPERATOR TRAINING */}
      <Section kicker={t('trainingKicker')} heading={t('trainingH')} lead={t('trainingP')}>
        <Link href={`/${locale}/platform/training`} className="btn-ghost group">
          {t('trainingCta')} <span className="arrow-rtl-flip">→</span>
        </Link>
      </Section>

      {/* INTELLIGENCE */}
      <Section kicker={t('intelligenceKicker')} heading={t('intelligenceH')} lead={t('intelligenceP')} />

      {/* PARTNERSHIP */}
      <Section kicker={t('partnershipKicker')} heading={t('partnershipH')} lead={t('partnershipP')} />

      {/* ALIGNMENT */}
      <Section kicker={t('alignmentKicker')} heading={t('alignmentH')} lead={t('alignmentP')} />

      {/* CTA */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="display-h2 mx-auto max-w-[20ch] text-[clamp(2rem,4vw,3.4rem)]">{t('ctaH')}</h2>
            <p className="mx-auto mt-6 max-w-[50ch] text-ink-dim">{t('ctaP')}</p>
            <div className="mt-10">
              <Link href={`/${locale}/engage`} className="btn-primary group">
                {t('ctaSecondary')} <span className="arrow-rtl-flip">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Section({
  kicker,
  heading,
  lead,
  children,
}: {
  kicker?: string;
  heading: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          {kicker ? <span className="label-mono">{kicker}</span> : null}
          <h2 className="display-h2 mt-4 max-w-[24ch] text-[clamp(1.8rem,3.4vw,3rem)]">{heading}</h2>
          {lead ? <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{lead}</p> : null}
        </Reveal>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
