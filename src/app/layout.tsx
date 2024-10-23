import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Provider from '@/providers/Provider';
import Image from 'next/image';
import background from '@images/background.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
          <Image
            className="background"
            src={background}
            alt="background"
            fill
          />
          {children}
          <ToastContainer position="top-center" theme="dark" />
        </body>
      </Provider>
    </html>
  );
}
