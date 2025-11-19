import { Metadata } from 'next';
import Script from 'next/script';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import WhyMedyourSectionAr from '../../components/sections/ar/why-medyour/WhyMedyourSection';
import WhyMedyourSectionEn from '../../components/sections/en/why-medyour/WhyMedyourSectionEn';
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
    title: t.whyMedyour.seo?.title || (lang === 'ar' ? 'لماذا ميديور؟ | ميديور' : 'Why Medyour? | Medyour'),
    description: t.whyMedyour.seo?.description || (lang === 'ar' ? 'تعرف على الأسباب التي تجعل ميديور خيارك الأفضل للرعاية الصحية الرقمية.' : 'Discover why Medyour is your best choice for digital healthcare.'),
    keywords: lang === 'ar'
      ? ['لماذا ميديور','مميزات','رعاية صحية رقمية','شبكة مزودين','تغطية صحية']
      : ['why Medyour','benefits','digital healthcare','provider network','health coverage'],
    openGraph: {
      title: t.whyMedyour.seo?.title || (lang === 'ar' ? 'لماذا ميديور؟ | ميديور' : 'Why Medyour? | Medyour'),
      url: `${baseUrl}${base}/why-medyour`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.whyMedyour.seo?.title || (lang === 'ar' ? 'لماذا ميديور؟ | ميديور' : 'Why Medyour? | Medyour'),
      description: t.whyMedyour.seo?.description || (lang === 'ar' ? 'تعرف على مميزات ميديور.' : 'Learn about Medyour\'s benefits.'),
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/why-medyour`,
      languages: {
        'ar': `${baseUrl}/why-medyour`,
        'en': `${baseUrl}/en/why-medyour`,
        'x-default': `${baseUrl}/why-medyour`,
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

export default function WhyMedyourPage({ params }: Props) {
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
      { '@type': 'ListItem', position: 2, name: t.whyMedyour.title, item: `${baseUrl}${base}/why-medyour` },
    ],
  };

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.whyMedyour.title}
          subtitle={t.whyMedyour.subtitle}
          backgroundImage={t.whyMedyour.backgroundImage}
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <WhyMedyourSectionAr /> : <WhyMedyourSectionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-why" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export const dynamic = 'force-static';

