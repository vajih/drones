import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { products, getProduct, type Family } from '@/content/products';
import { pick } from '@/lib/i18n';
import type { Locale } from '@/i18n/request';

export function generateStaticParams() {
  return products.map((p) => ({ family: p.family, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; family: string; slug: string };
}) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return { title: `${p.code} · ${pick(params.locale as Locale, p.codename)}` };
}

export default async function ProductPage({
  params,
}: {
  params: { locale: string; family: string; slug: string };
}) {
  setRequestLocale(params.locale);
  const product = getProduct(params.slug);
  if (!product || product.family !== (params.family as Family)) notFound();
  const locale = params.locale as Locale;
  const t = await getTranslations({ locale, namespace: 'common' });
  const tf = await getTranslations({ locale, namespace: 'families' });
  const td = await getTranslations({ locale, namespace: 'domains' });
  const tm = await getTranslations({ locale, namespace: 'missions' });

  return (
    <div className="container-content pb-24 pt-32">
      <Link href={`/${locale}/portfolio/${product.family}`} className="text-xs uppercase text-ink-dim hover:text-accent">
        ← {tf(product.family)}
      </Link>
      <div className="mt-6 grid gap-3">
        <span className="ref-code text-base">{product.code}</span>
        <h1 className="display-h1 text-[clamp(2.6rem,6vw,5.2rem)]">{pick(locale, product.codename)}</h1>
        <p className="max-w-[60ch] text-lg text-ink-dim">{pick(locale, product.classification)}</p>
      </div>

      <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
        <Cell label={t('classification')} value={tf(product.family)} />
        <Cell label={t('filterDomain')} value={product.domain.map((d) => td(d)).join(' · ')} />
        <Cell label={t('envelope')} value={pick(locale, product.envelope)} />
      </div>

      <section className="mt-16 grid gap-12 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-8">
          <p className="border-t border-line pt-6 text-lg leading-relaxed">{pick(locale, product.summary)}</p>
          <div>
            <h2 className="label-mono">{t('conops')}</h2>
            <div className="mt-4 grid gap-5 text-base leading-relaxed text-ink-dim">
              {product.conops.map((c, i) => (
                <p key={i}>{pick(locale, c)}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="label-mono">{t('deployment')}</h2>
            <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-ink-dim">
              {pick(locale, product.deployment)}
            </p>
          </div>
        </div>

        <aside className="border border-line bg-bg-card p-6">
          <h3 className="label-mono">{t('specSheet')}</h3>
          <dl className="mt-4 grid gap-3 text-sm">
            {product.parameters.map((p, i) => (
              <div key={i} className="grid gap-1 border-t border-line pt-3">
                <dt className="text-ink-faint">{pick(locale, p.k)}</dt>
                <dd className="text-ink">
                  {pick(locale, p.v)}
                  {p.status === 'design-target' && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider text-accent">{t('designTarget')}</span>
                  )}
                  {p.status === 'tktk' && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider text-signal">{t('tktk')}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <h3 className="label-mono">{t('missionProfiles')}</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {product.missionProfiles.map((m) => (
                <li key={m} className="border-t border-line pt-2 text-ink-dim">
                  {tm(m as Parameters<typeof tm>[0])}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg p-6">
      <div className="label-mono">{label}</div>
      <div className="mt-3 text-base">{value}</div>
    </div>
  );
}
