import type { Metadata, Viewport } from 'next';
import { inter, rajdhani } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArcadeOS - Gaming Cafe Management Software | Coming Soon',
  description:
    'The future of gaming cafe management. Automate billing, track games, maximize revenue. Built for Indian gaming cafes. Join the waitlist for early access.',
  keywords: [
    'gaming cafe software',
    'cyber cafe management',
    'gaming center software',
    'esports cafe',
    'India gaming cafe',
    'billing software',
  ],
  authors: [{ name: 'ArcadeOS' }],
  openGraph: {
    title: 'ArcadeOS - The Future of Gaming Cafe Management',
    description:
      'Automate billing. Track every game. Maximize revenue. Built for Indian gaming cafes.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ArcadeOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcadeOS - Gaming Cafe Management Software',
    description: 'The future of gaming cafe management. Coming soon.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
