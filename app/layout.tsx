import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Head from "next/head";
// import GoogleTracking from "./components/GoogleTracking";

const oxanium = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Tools CMS",
  description: "CMS for Magic Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className={`${oxanium.className} relative h-screen`}>

      {/* <GoogleTracking /> */}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-white opacity-50 z-[-1] h-full"></div>
        
        <div className="relative z-10">
          {children}
        </div>

        {/* Sticky Footer */}
        {/* <footer className="fixed bottom-0 left-0 w-full py-3 z-20">
          <div className="container mx-auto px-4 flex space-x-4 p-2 pl-12 font-semibold">
            <p className='hover:underline bg-black p-1 px-6 rounded-full'>
              <a href="mailto:office@softwaresuccess.com.au" target="_blank" rel="noopener noreferrer">Email</a>
            </p>
          </div>
        </footer> */}

      </body>
    </html>
  );
}
