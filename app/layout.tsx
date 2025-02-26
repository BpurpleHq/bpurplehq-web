import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer, Navbar, Upcoming } from '@/components'
import Head from 'next/head'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_GA_ID}`;

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'bpurpleHQ | Home',
  description: 'Unlocking business needs with customized technology solutions',
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
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_GA_ID}', {
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


// import './globals.css'
// import { Montserrat } from 'next/font/google'
// import { Footer, Navbar } from '@/components'
// import type { Metadata } from 'next'
// import Script from 'next/script'

// const montserrat = Montserrat({ subsets: ['latin'] })

// // Enhanced metadata configuration
// export const metadata = {

//   title: {
//     default: 'bpurple Technology | Home',
//     template: '%s | bpurpleHQ'
//   },
//   description: 'Unlocking business needs with customized technology solutions',
//   keywords: ['technology solutions', 'business solutions', 'digital transformation', 'bpurpleHQ', 'bpurple technology', 'tech training', 'AI', 'bootcamp'],
//   authors: [{ name: 'Bpurple Technology' }],
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     title: 'Bpurple Technology | Home',
//     description: 'Unlocking business needs with customized technology solutions',
//     siteName: 'bpurpleHQ'
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Bpurple Technology | Home',
//     description: 'Unlocking business needs with customized technology solutions'
//   },
//   robots: {
//     index: true,
//     follow: true
//   }
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
      
//         {process.env.NEXT_PUBLIC_GOOGLE_GA_ID && (
//           <Script
//             src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_GA_ID}`}
//             strategy="afterInteractive"
//           />
//         )}
//         {process.env.NEXT_PUBLIC_GOOGLE_GA_ID && (
//           <Script id="google-analytics" strategy="afterInteractive">
//             {`
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_GA_ID}', {
//                 page_path: window.location.pathname,
//                 debug_mode: ${process.env.NODE_ENV === 'development'}
//               });
//             `}
//           </Script>
//         )}
//       </head>
//       <body className={montserrat.className}>
//         <Navbar />
//         <main className="min-h-screen pt-[1px]">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
