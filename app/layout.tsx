import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Luxury Limo",
  applicationName: 'Elite Luxury Limo',
  referrer: 'origin-when-cross-origin',
  category: 'service',
  description: `We are a family and locally owned business deeply rooted in tradition serving the Chicago and Milwaukee markets. Where
  integrity and reliability resonate throughout the organization. We look forward to you or your organization joining our family of
  satisfied clients. Professional Chauffeur Services for Seamless Journeys! Book our services and enjoy a stylish and safe ride, regardless of your destination. We provide reliable and experienced chauffeurs ready to meet you at the airport or serve as your personal driver. With a modern fleet, high-quality service, and affordable rates, entrust your journey to professionals and make every ride a hassle-free experience!`,
  metadataBase: new URL('https://alexlimo.vercel.app/'),
  authors: [{ name: 'Alex' }, { name: 'Alex', url: 'https://alexlimo.vercel.app/' }],
  openGraph: {
    title: 'Elite Luxury Limo Order Ride',
    description: 'Professional Chauffeur Services for Seamless Journeys! Book our services and enjoy a stylish and safe ride, regardless of your destination. We provide reliable and experienced chauffeurs ready to meet you at the airport or serve as your personal driver. With a modern fleet, high-quality service, and affordable rates, entrust your journey to professionals and make every ride a hassle-free experience!',
    url: 'https://alexlimo.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Alex limo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  creator: 'Askar Zhaanbaev',
  publisher: 'Alex limoseoum',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  keywords: [
    "Transportation Services",
    "Airport Transportation",
    "Shuttle Service",
    "Car Service",
    "Party Bus",
    "Prom Limousine",
    "Wine Tours",
    "Limo Service",
    "Executive Transfers",
    "Limousine Service",
    "Wedding Limousine",
    "Taxi",
    "Chicago party bus",
    "party bus",
    "Chicago limo",
    "limo",
    "limousine",
    "black car",
    "Chicago black car",
    "suburbs limo",
    "suburbs limousine",
    "suburbs black car",
    "sprinter vans",
    "executive vans",
    "stretch limo",
    "stretch limousine",
    "bus",
    "Chicago bus",
    "Chicago stretch limo",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '@/public/vercel.svg',
    shortcut: '@/public/vercel.svg',
    apple: '@/public/vercel.svg',
    other: {
      rel: '@/public/vercel.svg',
      url: '@/public/vercel.svg',
    },
  },
};
export const viewport: Viewport = {
  themeColor: 'white',
  initialScale: 1,
  userScalable: true,
  colorScheme: 'dark',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script
  defer
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY as string}&libraries=places`}
        ></script>
      </head>
      <body className={inter.className}>
        <Providers>
          <Header/>
        <main>
        {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
