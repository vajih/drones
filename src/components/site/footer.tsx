import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/request';
import { BrandMark } from './brand-mark';

export function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-16">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <BrandMark />
              <span className="text-[13px] font-semibold ltr-iso">
                STERLING AUTONOMOUS SYSTEMS<span className="ml-2 font-normal text-ink-dim">/ SAS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-ink-dim">{t('tagline')}</p>
          </div>
          <FooterCol title={t('platform')}>
            <FootLink href={`/${locale}/platform`}>{tn('platform')}</FootLink>
            <FootLink href={`/${locale}/platform/intelligence`}>Intelligence</FootLink>
            <FootLink href={`/${locale}/platform/manufacturing`}>Manufacturing</FootLink>
            <FootLink href={`/${locale}/portfolio`}>{tn('portfolio')}</FootLink>
          </FooterCol>
          <FooterCol title={t('strategy')}>
            <FootLink href={`/${locale}/strategy`}>{tn('strategy')}</FootLink>
            <FootLink href={`/${locale}/missions`}>{tn('missions')}</FootLink>
            <FootLink href={`/${locale}/partnership`}>{tn('partnership')}</FootLink>
            <FootLink href={`/${locale}/perspectives`}>{tn('perspectives')}</FootLink>
          </FooterCol>
          <FooterCol title={t('engage')}>
            <FootLink href={`/${locale}/leadership`}>{tn('leadership')}</FootLink>
            <FootLink href={`/${locale}/press`}>{tn('press')}</FootLink>
            <FootLink href={`/${locale}/engage`}>{tn('engage')}</FootLink>
            <span className="text-[13px] text-ink-dim">{t('appointmentOnly')}</span>
          </FooterCol>
        </div>
        <p className="mt-12 max-w-3xl text-[12px] leading-relaxed text-ink-faint">{t('disclaimer')}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[11px] text-ink-faint ltr-iso" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
          <span>© {year} {t('rights')}</span>
          <span>{t('version')}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="mb-4 text-[11px] uppercase tracking-[0.14em] text-ink-faint" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>{title}</h5>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-[13px] text-ink-dim transition-colors hover:text-accent">
      {children}
    </Link>
  );
}
