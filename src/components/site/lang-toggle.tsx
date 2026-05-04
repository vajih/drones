'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/request';

export function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const target = locale === 'en' ? 'ar' : 'en';
  const newPath = pathname.replace(/^\/(en|ar)/, `/${target}`);
  return (
    <Link
      href={newPath || `/${target}`}
      className="border border-line-bright px-3 py-2 text-[11px] tracking-[0.14em] text-ink-dim transition-colors hover:border-accent-deep hover:text-accent"
      style={{ fontFamily: 'var(--font-jetbrains), monospace' }}
      aria-label={target === 'ar' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {target === 'ar' ? 'العربية' : 'EN'}
    </Link>
  );
}
