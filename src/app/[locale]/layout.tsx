import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/request';
import { TopBar } from '@/components/site/top-bar';
import { Footer } from '@/components/site/footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-jetbrains' });
const plexAr = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex-ar',
});
const kufiAr = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-kufi-ar',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: '/en',
      ar: '/ar',
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) notFound();
  setRequestLocale(params.locale);
  const messages = await getMessages();
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html
      lang={params.locale}
      dir={dir}
      className={`${inter.variable} ${jetbrains.variable} ${plexAr.variable} ${kufiAr.variable}`}
    >
      <body className={dir === 'rtl' ? 'font-ar' : 'font-sans'}>
        <NextIntlClientProvider messages={messages}>
          <TopBar locale={params.locale as Locale} />
          <main>{children}</main>
          <Footer locale={params.locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
