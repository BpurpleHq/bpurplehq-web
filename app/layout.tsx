import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer, Navbar } from '@/components'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'bpurpleHQ | Home',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {/* <Upcoming /> */}
        <main className='pt-[80px]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
