'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { products, type Family, type Domain } from '@/content/products';
import { pick } from '@/lib/i18n';
import type { Locale } from '@/i18n/request';

export function PortfolioGrid({ locale }: { locale: Locale }) {
  const tf = useTranslations('families');
  const td = useTranslations('domains');
  const tc = useTranslations('common');
  const [family, setFamily] = useState<Family | 'all'>('all');
  const [domain, setDomain] = useState<Domain | 'all'>('all');

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (family === 'all' || p.family === family) &&
          (domain === 'all' || p.domain.includes(domain)),
      ),
    [family, domain],
  );

  const families: (Family | 'all')[] = ['all', 'kinetic', 'counter-uas', 'vigilance', 'maritime', 'ground', 'manufacturing'];
  const domains: (Domain | 'all')[] = ['all', 'air', 'land', 'sea'];

  return (
    <>
      <div className="mb-10 grid gap-6 border-y border-line py-6 md:flex md:items-center md:justify-between">
        <FilterRow label={tc('filterFamily')}>
          {families.map((f) => (
            <button
              key={f}
              onClick={() => setFamily(f)}
              className={`pill ${family === f ? 'border-accent text-accent' : 'opacity-60 hover:opacity-100'}`}
            >
              {f === 'all' ? tc('all') : tf(f)}
            </button>
          ))}
        </FilterRow>
        <FilterRow label={tc('filterDomain')}>
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setDomain(d)}
              className={`pill ${domain === d ? 'border-accent text-accent' : 'opacity-60 hover:opacity-100'}`}
            >
              {d === 'all' ? tc('all') : td(d)}
            </button>
          ))}
        </FilterRow>
      </div>

      <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.code}
            href={`/${locale}/portfolio/${p.family}/${p.slug}`}
            className="group block bg-bg p-6 transition-colors hover:bg-bg-elev"
          >
            <div className="flex items-center justify-between">
              <span className="ref-code">{p.code}</span>
              <span className="label-mono text-[10px]">{tf(p.family)}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">{pick(locale, p.codename)}</h3>
            <p className="mt-3 text-sm text-ink-dim">{pick(locale, p.classification)}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-[11px] uppercase text-ink-faint">
                {p.domain.map((d) => td(d)).join(' · ')}
              </span>
              <span className="text-xs text-accent">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="label-mono">{label}</span>
      {children}
    </div>
  );
}
