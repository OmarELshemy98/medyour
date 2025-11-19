import { Metadata } from 'next';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import ServicesSectionAr from '../../components/sections/ar/services/services';
import ServiceSectionEn from '../../components/sections/en/services/ServiceSectionEn';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import FooterEn from '../../components/sections/en/footer/FooterEn';

type Props = {
  params: { lang: 'ar' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const t = getTranslations(lang);
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '';

  return {
    title: t.services.seo?.title || (lang === 'ar' ? 'خدماتنا | ميديور' : 'Our Services | Medyour'),
    description: t.services.seo?.description || (lang === 'ar' ? 'اكتشف مجموعة خدمات الرعاية الصحية الرقمية المتكاملة التي تقدمها ميديور.' : 'Discover Medyour\'s comprehensive range of digital healthcare services.'),
    openGraph: {
      title: t.services.seo?.title || (lang === 'ar' ? 'خدماتنا | ميديور' : 'Our Services | Medyour'),
      url: `${baseUrl}${base}/services`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/services`,
      languages: {
        'ar': `${baseUrl}/services`,
        'en': `${baseUrl}/en/services`,
      },
    },
  };
}

export default function ServicesPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.services.title}
          subtitle={t.services.subtitle}
          backgroundImage={t.services.backgroundImage}
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <ServicesSectionAr /> : <ServiceSectionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
    </>
  );
}

export const dynamic = 'force-static';

