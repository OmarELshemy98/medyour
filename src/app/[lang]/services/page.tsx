import { Metadata } from 'next';
import Script from 'next/script';
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
    keywords: lang === 'ar'
      ? ['ميديور','خدماتنا','خدمات صحية','رعاية صحية رقمية','اشتراك سنوي','شبكة مزودين','مصر','الشرق الأوسط']
      : ['Medyour','services','health services','digital healthcare','annual subscription','provider network','Egypt','Middle East'],
    openGraph: {
      title: t.services.seo?.title || (lang === 'ar' ? 'خدماتنا | ميديور' : 'Our Services | Medyour'),
      url: `${baseUrl}${base}/services`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.services.seo?.title || (lang === 'ar' ? 'خدماتنا | ميديور' : 'Our Services | Medyour'),
      description: t.services.seo?.description || (lang === 'ar' ? 'اكتشف خدمات ميديور للرعاية الصحية الرقمية.' : 'Explore Medyour\'s digital healthcare services.'),
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/services`,
      languages: {
        'ar': `${baseUrl}/services`,
        'en': `${baseUrl}/en/services`,
        'x-default': `${baseUrl}/services`,
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

export default function ServicesPage({ params }: Props) {
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
      { '@type': 'ListItem', position: 2, name: t.services.title, item: `${baseUrl}${base}/services` },
    ],
  };

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
      <Script id="jsonld-breadcrumb-services" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export const dynamic = 'force-static';

