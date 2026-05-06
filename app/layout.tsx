import './globals.css'
import { Montserrat, Open_Sans, Syne, Inter } from "next/font/google";
import { Footer, Navbar, Upcoming } from '@/components'
import Head from 'next/head'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_GA_ID}`;

const montserrat = Montserrat({ subsets: ['latin'] })

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: 'Bpurple Technology | Home',
  description: 'Unlocking business needs with customized technology solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${syne.variable} ${inter.variable}`}>
      <Head>
       {/* Google Analytics Measurement ID*/}
       <script async src={gtag} />
         
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GOOGLE_GA_ID}', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
      </Head>
      <body className= {montserrat.className}>
        <Navbar />
       {/*<Upcoming />*/}

        <main className='pt-[1px]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



