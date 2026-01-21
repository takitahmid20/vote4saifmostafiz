import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://vote4saifmostafiz.vercel.app'),
  title: {
    default: 'সাইফ মোস্তাফিজ - সিরাজগঞ্জ-৬ সংসদ সদস্য প্রার্থী | Vote For Saif',
    template: '%s | সাইফ মোস্তাফিজ - সিরাজগঞ্জ-৬'
  },
  description: 'সাইফ মোস্তাফিজ - সিরাজগঞ্জ-৬ আসনের সংসদ সদস্য প্রার্থী। জুলাইয়ের আকাঙ্ক্ষা ও শহীদ ওসমান হাদির ইনসাফের বাংলাদেশ গড়ার সংগ্রাম। নির্বাচনে শাপলা কলি, গণভোটে হ্যাঁ বলি।',
  keywords: ['সাইফ মোস্তাফিজ', 'সিরাজগঞ্জ-৬', 'এমপি প্রার্থী', 'জাতীয় নাগরিক কমিটি', 'শাপলা কলি', 'বাংলাদেশ নির্বাচন', 'Saif Mostafiz', 'Sirajganj-6', 'National Citizens Committee'],
  authors: [{ name: 'সাইফ মোস্তাফিজ' }],
  creator: 'সাইফ মোস্তাফিজ',
  publisher: 'Vote For Saif Campaign',
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    siteName: 'Vote For Saif - সাইফ মোস্তাফিজ',
    title: 'সাইফ মোস্তাফিজ - সিরাজগঞ্জ-৬ সংসদ সদস্য প্রার্থী',
    description: 'সিরাজগঞ্জ-৬ আসনের সংসদ সদস্য প্রার্থী সাইফ মোস্তাফিজ। জুলাইয়ের আকাঙ্ক্ষা ও শহীদ ওসমান হাদির ইনসাফের বাংলাদেশ গড়ার সংগ্রাম।',
    images: [
      {
        url: 'https://vote4saifmostafiz.vercel.app/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'সাইফ মোস্তাফিজ - সিরাজগঞ্জ-৬ এমপি প্রার্থী',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'সাইফ মোস্তাফিজ - সিরাজগঞ্জ-৬ এমপি প্রার্থী',
    description: 'নির্বাচনে শাপলা কলি, গণভোটে হ্যাঁ বলি। জুলাইয়ের আকাঙ্ক্ষা ও ইনসাফের বাংলাদেশ গড়ার সংগ্রাম।',
    images: ['https://vote4saifmostafiz.vercel.app/og-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'সাইফ মোস্তাফিজ',
    alternateName: 'Saif Mostafiz',
    description: 'সিরাজগঞ্জ-৬ আসনের সংসদ সদস্য প্রার্থী',
    image: 'https://vote4saifmostafiz.vercel.app/og-preview.png',
    jobTitle: 'সংসদ সদস্য প্রার্থী',
    affiliation: {
      '@type': 'Organization',
      name: 'জাতীয় নাগরিক কমিটি',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'সিরাজগঞ্জ',
      addressRegion: 'রাজশাহী বিভাগ',
      addressCountry: 'BD',
    },
    url: 'https://vote4saifmostafiz.vercel.app',
  };

  return (
    <html lang="bn">      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
