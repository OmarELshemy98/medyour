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
    openGraph: {
      title: lang === 'ar' ? 'من نحن | ميديور' : 'About Us | Medyour',
      url: `${baseUrl}${base}/about-us`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/about-us`,
      languages: {
        'ar': `${baseUrl}/about-us`,
        'en': `${baseUrl}/en/about-us`,
      },
    },
  };
}

export default function AboutUsPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

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
      <Script src="/js/script.js" strategy="lazyOnload" />
    </>
  );
}

export const dynamic = 'force-static';

