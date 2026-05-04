import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';
import type { Locale } from '@/i18n/request';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'nav' });
  return { title: t('portfolio') };
}

export default function PortfolioPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">02 · {params.locale === 'ar' ? 'المحفظة' : 'Portfolio'}</span>
      <h1 className="display-h1 mt-4 max-w-[18ch] text-[clamp(2.4rem,5vw,4.8rem)]">
        {params.locale === 'ar' ? 'كتالوج القدرات' : 'Capability catalog'}
      </h1>
      <p className="mt-6 max-w-[60ch] text-lg text-ink-dim">
        {params.locale === 'ar'
          ? 'تتوزّع المنصّة على ست عائلات قدرات وثلاثة مجالات تشغيل. كل قدرة هندسيًا قابلة للنشر تحت السلطة السيادية للشريك.'
          : 'The platform spans six capability families and three operating domains. Every capability is engineered for deployment under the partner nation’s sovereign authority.'}
      </p>
      <div className="mt-12">
        <PortfolioGrid locale={params.locale as Locale} />
      </div>
    </div>
  );
}
