import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Luxury Limo",
  category: 'service',
  description: "Alex limo",
  metadataBase: new URL('https://alexlimo.com'),
  authors: [{ name: 'Alex' }, { name: 'Alex', url: 'https://alexlimo.com' }],
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
