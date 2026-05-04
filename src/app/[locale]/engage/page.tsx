import { setRequestLocale, getTranslations } from 'next-intl/server';
import { EngageForm } from '@/components/engage/engage-form';
import type { Locale } from '@/i18n/request';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'engagePage' });
  return { title: t('title') };
}

export default async function EngagePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'engagePage' });
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">{t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[18ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('title')}</h1>
      <p className="mt-6 max-w-[60ch] text-lg text-ink-dim">{t('lead')}</p>

      <div className="mt-16 grid gap-12 border-t border-line pt-12 lg:grid-cols-[1fr_400px]">
        <EngageForm locale={params.locale as Locale} />
        <aside className="border border-line bg-bg-card p-6 text-sm text-ink-dim">
          <span className="label-mono">
            {params.locale === 'ar' ? 'بروتوكول التواصل' : 'Engagement protocol'}
          </span>
          <ul className="mt-4 grid gap-3">
            <li>
              {params.locale === 'ar'
                ? '· يجب استخدام بريد المؤسسة الرسمي.'
                : '· Submissions must use a verified institutional email.'}
            </li>
            <li>
              {params.locale === 'ar'
                ? '· الإحاطة الأولى سرية وللمبادئ فقط.'
                : '· The initial briefing is confidential and principals-only.'}
            </li>
            <li>
              {params.locale === 'ar'
                ? '· الردود تأتي من نطاق sterlingautonomoussystems.com.'
                : '· Responses originate from the sterlingautonomoussystems.com domain.'}
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
