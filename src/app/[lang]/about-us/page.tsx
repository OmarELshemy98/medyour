import { Metadata } from 'next';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import VisionMissionAr from '../../components/sections/ar/about-us/VisionMission';
import VisionMissionEn from '../../components/sections/en/about-us/VisionMissionSectionEn';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import FooterEn from '../../components/sections/en/footer/FooterEn';
// Fix: import Script from next/script
import Script from 'next/script';

type Props = {
  params: { lang: 'ar' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '';

  return {
    title: lang === 'ar' 
      ? 'من نحن | ميديور'
      : 'About Us | Medyour',
    description: lang === 'ar'
      ? 'تعرف على ميديور ومنصتنا المتطورة للرعاية الصحية الرقمية في مصر والشرق الأوسط.'
      : 'Learn about Medyour and our advanced digital healthcare platform in Egypt and the Middle East.',
    keywords: lang === 'ar'
      ? ['ميديور','من نحن','رعاية صحية رقمية','منصة الرعاية الصحية','خدمات طبية','شبكة مزودين','مصر','الشرق الأوسط']
      : ['Medyour','About Us','digital healthcare','healthcare platform','medical services','provider network','Egypt','Middle East'],
    openGraph: {
      title: lang === 'ar' ? 'من نحن | ميديور' : 'About Us | Medyour',
      url: `${baseUrl}${base}/about-us`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: lang === 'ar' ? 'من نحن | ميديور' : 'About Us | Medyour',
      description: lang === 'ar'
        ? 'تعرف على ميديور ومنصتنا المتطورة للرعاية الصحية الرقمية.'
        : 'Learn about Medyour and our advanced digital healthcare platform.',
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/about-us`,
      languages: {
        'ar': `${baseUrl}/about-us`,
        'en': `${baseUrl}/en/about-us`,
        'x-default': `${baseUrl}/about-us`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default function AboutUsPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '/ar';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isArabic ? 'الرئيسية' : 'Home', item: `${baseUrl}${base}` },
      { '@type': 'ListItem', position: 2, name: isArabic ? 'من نحن' : 'About Us', item: `${baseUrl}${base}/about-us` },
    ],
  };

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.nav.aboutUs}
          subtitle={isArabic
            ? 'تعرف على ميديور ومنصتنا المتطورة للرعاية الصحية الرقمية'
            : 'Learn about Medyour and our advanced digital healthcare platform'}
          backgroundImage="/images/background-img.png"
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <VisionMissionAr /> : <VisionMissionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-about" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script src="/js/script.js" strategy="lazyOnload" />
    </>
  );
}

export const dynamic = 'force-static';

