import Head from 'next/head';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dalmatian emerges as a catalyst for DeFi's transformation on the Shibarium Chain, presenting a suite of features that redefine how users engage with decentralized finance." />
        <meta property="og:title" content="Dalmatian" />
        <meta property="og:description" content="Dalmatian emerges as a catalyst for DeFi's transformation on the Shibarium Chain, presenting a suite of features that redefine how users engage with decentralized finance." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="//i.ibb.co/WpBtD2L/2.png" />
        <meta property="og:image:secure_url" content="https://i.ibb.co/WpBtD2L/2.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://dalmatian.exchange" />
        <meta property="og:site_name" content="Dalmatian" />
        <link rel="icon" href="/favicon.ico" />
        <title>Dalmatian</title>
    </Head>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
