import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/provider/themeProvider";
import Nextloader from 'nextjs-toploader'
import './global.css'

import { Toaster } from 'sonner' 

const inter = Inter({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <Nextloader showSpinner={false} />
        <Toaster position="bottom-center"/>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
