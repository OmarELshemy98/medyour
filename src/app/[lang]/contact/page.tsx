import { Metadata } from 'next';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import ContactSectionAr from '../../components/sections/ar/contact/contact';
import ContactSectionEn from '../../components/sections/en/contact/contact';
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
    title: t.contact.seo?.title || (lang === 'ar' ? 'تواصل معنا | ميديور' : 'Contact Us | Medyour'),
    description: t.contact.seo?.description || (lang === 'ar' ? 'تواصل مع فريق ميديور للرعاية الصحية الذكية لأي استفسار أو دعم.' : 'Contact Medyour smart healthcare team for any inquiries or support.'),
    openGraph: {
      title: t.contact.seo?.title || (lang === 'ar' ? 'تواصل معنا | ميديور' : 'Contact Us | Medyour'),
      url: `${baseUrl}${base}/contact`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/contact`,
      languages: {
        'ar': `${baseUrl}/contact`,
        'en': `${baseUrl}/en/contact`,
      },
    },
  };
}

export default function ContactPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          backgroundImage={t.contact.backgroundImage}
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <ContactSectionAr /> : <ContactSectionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
    </>
  );
}

export const dynamic = 'force-static';

