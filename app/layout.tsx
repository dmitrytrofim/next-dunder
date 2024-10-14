import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../layouts/TheHeader';
import Footer from '../layouts/TheFooter';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${inter.className} antialiased`}>
    <div className="relative min-h-dvh grid grid-cols-[minmax(300px,_1fr)] grid-rows-[auto_1fr_auto] overflow-hidden">
     <Header />
     <main>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
