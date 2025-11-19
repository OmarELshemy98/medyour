import { Metadata } from 'next';
import Script from 'next/script';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import ContactSectionAr from '../../components/sections/ar/contact/contact';
import ContactSectionEn from '../../components/sections/en/contact/contact';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import FooterEn from '../../components/sections/en/footer/FooterEn';
import { getTranslations } from '../../../lib/locales';

type Props = {
  params: { lang: 'ar' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const t = getTranslations(lang);
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '';

  return {
    title: t.contact.seo?.title || (lang === 'ar' ? 'تواصل معنا | ميديور' : 'Contact Us | Medyour'),
    description: t.contact.seo?.description || (lang === 'ar' ? 'تواصل مع فريق ميديور للرعاية الصحية الذكية لأي استفسار أو دعم.' : 'Contact Medyour smart healthcare team for any inquiries or support.'),
    keywords: lang === 'ar'
      ? ['تواصل معنا','دعم','ميديور','رعاية صحية رقمية','اتصال','البريد الإلكتروني','الهاتف']
      : ['contact us','support','Medyour','digital healthcare','contact','email','phone'],
    openGraph: {
      title: t.contact.seo?.title || (lang === 'ar' ? 'تواصل معنا | ميديور' : 'Contact Us | Medyour'),
      url: `${baseUrl}${base}/contact`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.contact.seo?.title || (lang === 'ar' ? 'تواصل معنا | ميديور' : 'Contact Us | Medyour'),
      description: t.contact.seo?.description || (lang === 'ar' ? 'تواصل مع فريق ميديور.' : 'Contact the Medyour team.'),
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/contact`,
      languages: {
        'ar': `${baseUrl}/contact`,
        'en': `${baseUrl}/en/contact`,
        'x-default': `${baseUrl}/contact`,
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

export default function ContactPage({ params }: Props) {
  const { lang } = params;
  const isArabic = lang === 'ar';
  const baseUrl = 'https://www.medyour.com';
  const base = lang === 'en' ? '/en' : '/ar';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isArabic ? 'الرئيسية' : 'Home', item: `${baseUrl}${base}` },
      { '@type': 'ListItem', position: 2, name: isArabic ? 'تواصل معنا' : 'Contact Us', item: `${baseUrl}${base}/contact` },
    ],
  };
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: isArabic ? 'تواصل معنا' : 'Contact Us',
    url: `${baseUrl}${base}/contact`,
  };

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        {isArabic ? <ContactSectionAr /> : <ContactSectionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-contact" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="jsonld-contactpage" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
    </>
  );
}

export const dynamic = 'force-static';

