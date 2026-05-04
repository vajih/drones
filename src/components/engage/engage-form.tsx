'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/request';

export function EngageForm({ locale }: { locale: Locale }) {
  const t = useTranslations('engagePage');
  const tn = useTranslations('common');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/engage', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(j.error ?? 'submit_failed');
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-accent-deep bg-bg-card p-8">
        <span className="label-mono">{tn('thankYou').split('.')[0] || 'Received'}</span>
        <p className="mt-4 text-lg leading-relaxed">{tn('thankYou')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      {/* honeypot */}
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-6 md:grid-cols-2">
        <Field name="name" label={t('name')} required locale={locale} />
        <Field name="title" label={t('title2')} required locale={locale} />
        <Field name="org" label={t('org')} required locale={locale} />
        <Field name="country" label={t('country')} required locale={locale} />
        <Field name="email" label={t('email')} type="email" required locale={locale} />
        <Field name="phone" label={t('phone')} locale={locale} />
      </div>

      <div>
        <label className="label-mono mb-3 block">{t('purpose')}</label>
        <div className="grid gap-3 md:grid-cols-2">
          {(['briefing', 'partnership', 'press', 'other'] as const).map((v) => (
            <label key={v} className="flex cursor-pointer items-center gap-3 border border-line p-3 text-sm hover:border-accent-deep">
              <input type="radio" name="purpose" value={v} required className="accent-accent" />
              {t(`purpose${v.charAt(0).toUpperCase() + v.slice(1)}` as 'purposeBriefing')}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="label-mono mb-3 block" htmlFor="notes">{t('notes')}</label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className="w-full border border-line bg-bg-elev p-4 text-base focus:border-accent focus:outline-none"
        />
      </div>

      {status === 'error' ? (
        <div className="border border-signal/40 bg-signal/5 p-4 text-sm text-signal">
          {errorMsg || (locale === 'ar' ? 'تعذّر الإرسال. حاول لاحقًا.' : 'Submission failed. Please try again.')}
        </div>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary group disabled:opacity-50"
        >
          {status === 'submitting' ? tn('submitting') : t('submit')}{' '}
          <span className="arrow-rtl-flip">→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
  locale: _locale,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  locale: Locale;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="label-mono">{label}{required ? ' *' : ''}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border border-line bg-bg-elev p-3 text-base focus:border-accent focus:outline-none"
      />
    </div>
  );
}
