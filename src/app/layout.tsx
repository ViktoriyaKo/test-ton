import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/packages/core';
import Provider from '@/Provider/Provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Test task Do IT',
  description:
    'A web application for linking a TonKeeper crypto wallet and making transfers in the TON TestNet network',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={montserrat.variable}>
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  );
}
