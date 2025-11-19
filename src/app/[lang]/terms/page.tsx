import { Metadata } from 'next';
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
    openGraph: {
      title: lang === 'ar' ? 'الشروط والأحكام | ميديور' : 'Terms & Conditions | Medyour',
      url: `${baseUrl}${base}/terms`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/terms`,
      languages: {
        'ar': `${baseUrl}/terms`,
        'en': `${baseUrl}/en/terms`,
      },
    },
  };
}

export default function TermsPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.footer.terms}
          subtitle={isArabic
            ? 'الشروط والأحكام لاستخدام منصة ميديور'
            : 'Terms and conditions for using Medyour platform'}
          backgroundImage="/images/background-img.png"
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <TermsContentAr /> : <TermsContentEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
    </>
  );
}

export const dynamic = 'force-static';

