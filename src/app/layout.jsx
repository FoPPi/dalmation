import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dalmation',
  description: 'Dalmatian emerges as a catalyst for DeFi\'s transformation on the Shibarium Chain, presenting a suite of features that redefine how users engage with decentralized finance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
