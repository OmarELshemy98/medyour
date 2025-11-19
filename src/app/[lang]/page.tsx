import { Metadata } from 'next';
import Script from 'next/script';
import UnifiedNavbar from '../components/layout/UnifiedNavbar';
import { getTranslations } from '../../lib/locales';
import LineSeparator from '../components/common/LineSeparator';
import FooterAr from '../components/sections/ar/footer/FooterAr';
import FooterEn from '../components/sections/en/footer/FooterEn';
import FirstSectionMobileSection from '../components/sections/ar/home/FirstSectionMobileSection';
import SecondSectionIntroduction from '../components/sections/ar/home/SecondSectionIntroduction';
import ThirdSectionWhatMedyour from '../components/sections/ar/home/thirdSectionWhatMedyour';
import FourthSectionVision from '../components/sections/ar/home/fourthSectionVision';
import LastSectionCarouselHome from '../components/sections/ar/home/lastSectionCarouselHome';
import FirstSectionMobileSectionEn from '../components/sections/en/home/FirstSectionMobileSectionEn';
import SecondSectionIntroductionEn from '../components/sections/en/home/SecondSectionIntroductionEn';
import ThirdSectionWhatMedyourEn from '../components/sections/en/home/ThirdSectionWhatMedyourEn';
import FourthSectionVisionEn from '../components/sections/en/home/FourthSectionVisionEn';
import LastSectionCarouselHomeEn from '../components/sections/en/home/LastSectionCarouselHomeEn';
type Props = {
  params: { lang: 'ar' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '/ar';

  return {
    title: lang === 'ar'
      ? 'ميديور | منصة الرعاية الصحية الرقمية المتكاملة | مصر والشرق الأوسط'
      : 'Medyour | Digital Healthcare Platform & Services in the Middle East | Integrated Healthcare Network & Medical Solutions in Egypt',
    description: lang === 'ar'
      ? 'ميديور هي منصة رعاية صحية رقمية رائدة توفر تغطية صحية شاملة، تطبيق موبايل سهل الاستخدام، والوصول إلى أكثر من 2500+ مزود رعاية صحية موثوق في الشرق الأوسط.'
      : 'Medyour is a leading digital healthcare platform offering comprehensive health coverage, a user-friendly mobile app, and access to 2500+ trusted providers across the Middle East.',
    keywords: lang === 'ar'
      ? 'ميديور, رعاية صحية رقمية, منصة رعاية صحية, تغطية صحية, تطبيق موبايل, شبكة مزودين, الشرق الأوسط, رعاية صحية ميسورة, رعاية صحية شاملة, خدمات طبية, إدارة صحية'
      : 'Medyour, digital healthcare, healthcare platform, health coverage, mobile app, provider network, Middle East, affordable healthcare, inclusive healthcare, medical services, health management',
    openGraph: {
      title: lang === 'ar' ? 'ميديور | منصة الرعاية الصحية الرقمية' : 'Medyour | Digital Healthcare Platform',
      description: lang === 'ar'
        ? 'ميديور هي منصة رعاية صحية رقمية رائدة توفر تغطية صحية شاملة.'
        : 'Medyour is a leading digital healthcare platform offering comprehensive health coverage.',
      url: `${baseUrl}${base}`,
      siteName: 'Medyour',
      images: [{ url: `${baseUrl}/images/logo-medyour.png`, width: 1200, height: 630 }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: lang === 'ar' ? 'ميديور | منصة الرعاية الصحية الرقمية' : 'Medyour | Digital Healthcare Platform',
      description: lang === 'ar'
        ? 'ميديور هي منصة رعاية صحية رقمية رائدة.'
        : 'Medyour is a leading digital healthcare platform.',
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}`,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/`,
      },
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
}

export default function HomePage({ params }: Props) {
  const { lang } = params;
  const isArabic = lang === 'ar';
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '/ar';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isArabic ? 'الرئيسية' : 'Home', item: `${baseUrl}${base}` },
    ],
  };

  return (
    <>
      <UnifiedNavbar lang={lang} isHome />
      <main
        dir={isArabic ? 'rtl' : 'ltr'}
        className={`min-h-screen text-[#123D46] pt-[85px] ${isArabic ? 'text-right' : 'text-left'}`}
      >
        {isArabic ? (
          <>
            <FirstSectionMobileSection />
            <SecondSectionIntroduction />
            <LineSeparator />
            <ThirdSectionWhatMedyour />
            <LineSeparator />
            <FourthSectionVision />
            <LastSectionCarouselHome />
          </>
        ) : (
          <>
            <FirstSectionMobileSectionEn />
            <SecondSectionIntroductionEn />
            <LineSeparator />
            <ThirdSectionWhatMedyourEn />
            <LineSeparator />
            <FourthSectionVisionEn />
            <LastSectionCarouselHomeEn />
          </>
        )}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-home" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export const dynamic = 'force-static';

