import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from 'next/head'
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Joyce Clínica Veterinária",
  description: "O melhor serviço veterinário oferecido a seu pet!",
  icons: {
    icon: "/favicon.ico",
  },
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={poppins.className} lang="pt-br">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:;" />
        <meta name="theme-color" content="#000000" />
      </Head>   
      
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
