import Head from 'next/head';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
      title: 'Dalmation',
      description: 'Dalmatian emerges as a catalyst for DeFi\'s transformation on the Shibarium Chain, presenting a suite of features that redefine how users engage with decentralized finance.',
      image: '/preview.png',
    siteName: 'Dalmation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
