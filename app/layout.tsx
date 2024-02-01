import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Luxury Limo",
  description: "Alex limo",
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
