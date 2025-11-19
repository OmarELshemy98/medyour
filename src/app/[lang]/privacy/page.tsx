import { Metadata } from 'next';
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
    openGraph: {
      title: lang === 'ar' ? 'سياسة الخصوصية | ميديور' : 'Privacy Policy | Medyour',
      url: `${baseUrl}${base}/privacy`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/privacy`,
      languages: {
        'ar': `${baseUrl}/privacy`,
        'en': `${baseUrl}/en/privacy`,
      },
    },
  };
}

export default function PrivacyPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.footer.privacy}
          subtitle={isArabic
            ? 'سياسة الخصوصية لاستخدام منصة ميديور'
            : 'Privacy policy for using Medyour platform'}
          backgroundImage="/images/background-img.png"
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <PrivacyContentAr /> : <PrivacyContentEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
    </>
  );
}

export const dynamic = 'force-static';

