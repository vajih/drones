import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { families } from '@/content/products';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'platform' });
  return { title: t('title') };
}

export default async function PlatformPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'platform' });
  const tf = await getTranslations({ locale: params.locale, namespace: 'families' });

  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">01 · {t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[18ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('title')}</h1>
      <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('lead')}</p>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="label-mono">{t('vehiclesH')}</h2>
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {families.map((f) => (
            <Link
              key={f}
              href={`/${params.locale}/portfolio/${f}`}
              className="group block bg-bg p-8 transition-colors hover:bg-bg-elev"
            >
              <div className="label-mono">{f.toUpperCase()}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{tf(f)}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="label-mono">{t('intelligenceH')}</h2>
        <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">
          {params.locale === 'ar'
            ? 'نسيج قيادة وسيطرة معزَّز بالذكاء الاصطناعي يدمج المستشعرات والمركبات والمؤثِّرات في صورة عملياتية موحَّدة، تحت حوكمة سيادية. يعمل في البيئات المتدنّية الأداء حيث تُحرَم وصلات نظام تحديد المواقع والاتصالات الفضائية.'
            : 'An AI-enabled C2 fabric that fuses sensors, vehicles, and effectors into a unified operational picture under sovereign governance. Operates in degraded environments where GPS and SATCOM links are denied.'}
        </p>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="label-mono">{t('manufacturingH')}</h2>
        <Link href={`/${params.locale}/platform/manufacturing`} className="btn-ghost group mt-6">
          {params.locale === 'ar' ? 'العقيدة الصناعية' : 'Industrial doctrine'}{' '}
          <span className="arrow-rtl-flip">→</span>
        </Link>
      </section>
    </div>
  );
}
