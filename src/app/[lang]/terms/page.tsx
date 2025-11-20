import { Metadata } from 'next';
import Script from 'next/script';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import TermsContentAr from '../../components/sections/ar/legal/TermsContent';
import TermsContentEn from '../../components/sections/en/legal/TermsContentSectionEn';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import FooterEn from '../../components/sections/en/footer/FooterEn';

type Props = {
  params: { lang: 'ar' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '';

  return {
    title: lang === 'ar' 
      ? 'الشروط والأحكام | ميديور'
      : 'Terms & Conditions | Medyour',
    description: lang === 'ar'
      ? 'الشروط والأحكام لاستخدام منصة ميديور للرعاية الصحية'
      : 'Terms and conditions for using Medyour healthcare platform',
    keywords: lang === 'ar'
      ? ['الشروط والأحكام','سياسات','ميديور','الاستخدام','منصة','رعاية صحية']
      : ['terms and conditions','policies','Medyour','usage','platform','healthcare'],
    openGraph: {
      title: lang === 'ar' ? 'الشروط والأحكام | ميديور' : 'Terms & Conditions | Medyour',
      url: `${baseUrl}${base}/terms`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: lang === 'ar' ? 'الشروط والأحكام | ميديور' : 'Terms & Conditions | Medyour',
      description: lang === 'ar'
        ? 'الشروط والأحكام لاستخدام منصة ميديور.'
        : 'Terms and conditions for using Medyour platform.',
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/terms`,
      languages: {
        'ar': `${baseUrl}/terms`,
        'en': `${baseUrl}/en/terms`,
        'x-default': `${baseUrl}/terms`,
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

export default function TermsPage({ params }: Props) {
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
      { '@type': 'ListItem', position: 2, name: t.footer.terms, item: `${baseUrl}${base}/terms` },
    ],
  };

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={isArabic ? 'شروط الاستخدام' : 'Medyour Terms of Service'}
          subtitle={isArabic
            ? 'مرحبًا بك في ميديور، منصتك الرقمية الأولى للرعاية الصحية. باستخدامك لمنصتنا أو أي من خدماتنا، فإنك تُقر بموافقتك على هذه الشروط وسياسة الخصوصية الخاصة بنا. إذا كنت لا توافق على أي من بنودها، نرجو منك عدم استخدام خدماتنا.'
            : 'Welcome to Medyour, a digital-first healthcare platform. By accessing or using our services, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.'}
          backgroundImage="/images/background-img.png"
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <TermsContentAr /> : <TermsContentEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-terms" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export const dynamic = 'force-static';

