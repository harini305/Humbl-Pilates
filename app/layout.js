import { Lexend, Jost } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FooterFit from '@/components/FooterFit';
import { site, contact } from '@/lib/content';
import './globals.css';

// Exactly two families, chosen to match the logo, self-hosted by next/font.
// Lexend echoes the wide geometric "Humbl." wordmark (headings);
// Jost echoes the "PILATES" line beneath it (text, navigation, buttons).
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lexend',
  display: 'swap',
});
const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Humbl Pilates · Boutique Reformer Studio in Pererenan, Bali',
    template: '%s · Humbl Pilates, Pererenan, Bali',
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Humbl Pilates',
    locale: 'en_GB',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#faf9f7',
};

// Structured data from verified facts only. Opening hours are left out
// until the conflict in audit 08 (F5) is resolved.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: 'Humbl Pilates',
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  email: contact.email,
  telephone: contact.phoneE164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Pantai Pererenan',
    addressLocality: 'Pererenan, Mengwi',
    addressRegion: 'Badung, Bali',
    postalCode: '80351',
    addressCountry: 'ID',
  },
  geo: { '@type': 'GeoCoordinates', latitude: contact.geo.lat, longitude: contact.geo.lng },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lexend.variable} ${jost.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Motion />
        <FooterFit />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
