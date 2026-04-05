import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'YusufStore | Premium E-commerce Experience',
    template: '%s | YusufStore',
  },
  description:
    'Discover a curated collection of high-quality products. Fast shipping, secure payments, and a minimalist shopping experience.',
  keywords: [
    'e-commerce',
    'online shopping',
    'tech gadgets',
    'minimalist store',
    'YusufStore',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yusufstore-store.vercel.app',
    siteName: 'YusufStore',
    title: 'YusufStore | Modern Shopping',
    description:
      'The future of digital retail. Shop the latest trends with ease.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header />
        <main className='px-4 max-w-7xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}
