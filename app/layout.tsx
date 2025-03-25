import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/themeProvider";
import Nextloader from 'nextjs-toploader'

import { Toaster } from 'sonner' 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: 'VortexCards | NFC equipments',
    template: '%s | VortexCards'
  },
  description: "VortexCards bu sizning biznessingiz uchun NFC karta, braslet va stikerlarni taqdim qiladi.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
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
