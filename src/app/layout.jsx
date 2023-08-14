import Head from 'next/head';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Dalmatian',
    description: 'Dalmatian emerges as a catalyst for DeFi\'s transformation on the Shibarium Chain, presenting a suite of features that redefine how users engage with decentralized finance.',
    image: '/preview.png',
    siteName: 'Dalmatian',
    url: 'https://dalmatian.exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.siteName} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
    </Head>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
