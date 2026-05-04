import { setRequestLocale, getTranslations } from 'next-intl/server';
import { missionMatrix } from '@/content/missions';
import { families } from '@/content/products';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'missionsPage' });
  return { title: t('title') };
}

export default async function MissionsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'missionsPage' });
  const tm = await getTranslations({ locale: params.locale, namespace: 'missions' });
  const tf = await getTranslations({ locale: params.locale, namespace: 'families' });

  return (
    <div className="container-content pb-24 pt-32">
      <span className="label-mono">03 · {t('title')}</span>
      <h1 className="display-h1 mt-4 max-w-[18ch] text-[clamp(2.4rem,5vw,4.8rem)]">{t('title')}</h1>
      <p className="mt-6 max-w-[68ch] text-lg text-ink-dim">{t('lead')}</p>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="label-mono">{t('matrixH')}</h2>
        <p className="mt-4 max-w-[68ch] text-base text-ink-dim">{t('matrixLead')}</p>

        <div className="mt-10 overflow-x-auto border border-line">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-bg-elev">
                <th className="border-b border-line p-4 text-[11px] uppercase tracking-wider text-ink-dim">
                  {params.locale === 'ar' ? 'المهمة' : 'Mission'}
                </th>
                {families.map((f) => (
                  <th
                    key={f}
                    className="border-b border-l border-line p-4 text-[11px] uppercase tracking-wider text-ink-dim"
                  >
                    {tf(f)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {missionMatrix.map((row) => (
                <tr key={row.slug} className="hover:bg-bg-elev/50">
                  <td className="border-b border-line p-4 font-medium">{tm(row.slug as Parameters<typeof tm>[0])}</td>
                  {families.map((f) => {
                    const isPrimary = row.primary.includes(f);
                    const isSupport = row.supporting.includes(f);
                    return (
                      <td key={f} className="border-b border-l border-line p-4 text-center">
                        {isPrimary ? (
                          <span className="inline-block h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                        ) : isSupport ? (
                          <span className="inline-block h-2 w-2 rounded-full bg-accent-deep opacity-70" />
                        ) : (
                          <span className="text-ink-faint">·</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 text-xs text-ink-dim">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-accent" />
            {params.locale === 'ar' ? 'دور أساسي' : 'Primary'}
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-deep" />
            {params.locale === 'ar' ? 'دور مساند' : 'Supporting'}
          </div>
        </div>
      </section>
    </div>
  );
}
