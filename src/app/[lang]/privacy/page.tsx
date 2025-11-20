import { Metadata } from 'next';
import Script from 'next/script';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import PrivacyContentAr from '../../components/sections/ar/legal/PrivacyContent';
import PrivacyContentEn from '../../components/sections/en/legal/PrivacyContentSectionEn';
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
      ? 'سياسة الخصوصية | ميديور'
      : 'Privacy Policy | Medyour',
    description: lang === 'ar'
      ? 'سياسة الخصوصية لاستخدام منصة ميديور للرعاية الصحية'
      : 'Privacy policy for using Medyour healthcare platform',
    keywords: lang === 'ar'
      ? ['سياسة الخصوصية','البيانات','حماية البيانات','ميديور','منصة','رعاية صحية']
      : ['privacy policy','data','data protection','Medyour','platform','healthcare'],
    openGraph: {
      title: lang === 'ar' ? 'سياسة الخصوصية | ميديور' : 'Privacy Policy | Medyour',
      url: `${baseUrl}${base}/privacy`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: lang === 'ar' ? 'سياسة الخصوصية | ميديور' : 'Privacy Policy | Medyour',
      description: lang === 'ar'
        ? 'سياسة الخصوصية لاستخدام منصة ميديور.'
        : 'Privacy policy for using Medyour platform.',
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/privacy`,
      languages: {
        'ar': `${baseUrl}/privacy`,
        'en': `${baseUrl}/en/privacy`,
        'x-default': `${baseUrl}/privacy`,
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

export default function PrivacyPage({ params }: Props) {
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
      { '@type': 'ListItem', position: 2, name: t.footer.privacy, item: `${baseUrl}${base}/privacy` },
    ],
  };

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={isArabic ? t.footer.privacy : 'Medyour Privacy Policy'}
          subtitle={isArabic
            ? 'في ميديور، نحرص على حماية خصوصيتك. توضح هذه السياسة كيف نقوم بجمع معلوماتك الشخصية، واستخدامها، ومشاركتها، وحمايتها.'
            : 'At Medyour, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.'}
          backgroundImage="/images/background-img.png"
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <PrivacyContentAr /> : <PrivacyContentEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-privacy" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export const dynamic = 'force-static';

