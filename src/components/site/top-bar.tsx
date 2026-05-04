import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/request';
import { BrandMark } from './brand-mark';
import { LangToggle } from './lang-toggle';

const navItems = [
  { href: 'platform', key: 'platform' as const },
  { href: 'portfolio', key: 'portfolio' as const },
  { href: 'missions', key: 'missions' as const },
  { href: 'strategy', key: 'strategy' as const },
  { href: 'partnership', key: 'partnership' as const },
  { href: 'perspectives', key: 'perspectives' as const },
];

export function TopBar({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <BrandMark />
          <span className="text-[13px] font-semibold tracking-wide ltr-iso">
            STERLING AUTONOMOUS SYSTEMS<span className="ml-2 font-normal text-ink-dim">/ SAS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="text-[13px] text-ink-dim transition-colors hover:text-ink"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle locale={locale} />
          <Link
            href={`/${locale}/engage`}
            className="border border-accent-deep px-4 py-2 text-[12px] uppercase text-accent transition-colors hover:bg-accent hover:text-black"
            style={{ fontFamily: 'var(--font-jetbrains), monospace', letterSpacing: '0.12em' }}
          >
            {t('engage')} <span className="arrow-rtl-flip">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
