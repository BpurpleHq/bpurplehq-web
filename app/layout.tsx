import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer, Navbar, Upcoming } from '@/components'
import Head from 'next/head'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_GA_ID}`;

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'bpurpleHQ | Home',
  description: 'Equipping next-gen human capital in tech, leadership character and capacity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
       <Upcoming />

        <main className='pt-[1px]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
