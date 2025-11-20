import { ReactNode } from 'react';
import Script from 'next/script';
import '../globals.css';

type Props = {
  children: ReactNode;
  params: { lang: 'ar' | 'en' };
};

export default function LangLayout({ children, params }: Props) {
  const { lang } = params;
  const isRtl = lang === 'ar';
  const baseUrl = 'https://www.medyour.com';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Medyour Healthcare',
    url: baseUrl,
    logo: `${baseUrl}/images/logo-medyour.png`,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61576602431934',
      'https://www.instagram.com/medyouregypt/',
      'https://www.linkedin.com/company/medyouregypt',
      'https://x.com/medyouregypt',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: baseUrl,
    name: 'Medyour',
    inLanguage: isRtl ? 'ar' : 'en',
  };

  return (
    <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preload" as="image" href="/images/background-img.png" />
        <link rel="preload" as="image" href="/images/navbar-background.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#001117" />
      </head>
      <body className="antialiased">
        {children}
        <Script id="jsonld-organization" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export const dynamic = 'force-static';

