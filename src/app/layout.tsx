import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>   
      
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
