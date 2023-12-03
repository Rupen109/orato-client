// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orato',
  description: 'BRAND EXPERTIES',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>
        <Navbar />
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
