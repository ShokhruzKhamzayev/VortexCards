import Provider from "@/provider/themeProvider";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Poppins } from "next/font/google";
import Nextloader from 'nextjs-toploader';
import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'sonner';
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: 'VortexCards | NFC equipments',
    template: '%s | VortexCards'
  },
  description: "VortexCards bu sizning biznessingiz uchun eski qog'oz tashrif qog'ozlaringizni NFC karta, braslet va stikerlarga almashtiradi.",
  keywords: ['Onlayn Visitka', 'Visitka web sayt', 'Tashrif qog\'oz onlayn', 'Vortex Cards visitkalar', 'VortexCards'],
  authors: [{name: 'Shaxruzbek Xamzayev', url: 'https://khamzayev.uz'}, {name: 'Sardorbek Hamidov', url: 'https://cards.vortexhub.uz/individual/hamidov-sardorbek'}],
  category: 'online service',
  openGraph: {
    title: "VortexCards | Sizning onlayn tashrif qog'ozingiz",
    description: "VortexCards bu sizning biznessingiz uchun eski qog'oz tashrif qog'ozlaringizni NFC karta, braslet va stikerlarga almashtiradi.",
  },
  verification: {
    google: '_kN7_GGe85pNxxhU74HNL5P85ge2cApZBFHryUzjTAw',
    yandex: '8a7036e97c55ddf4'
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        <NextIntlClientProvider>
          <Provider>
            {children}
          </Provider>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId={process.env.gaId!}/>
        <Nextloader showSpinner={false} />
        <Toaster position="bottom-center"/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
