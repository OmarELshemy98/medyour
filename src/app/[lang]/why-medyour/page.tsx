import { Metadata } from 'next';
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
    openGraph: {
      title: t.whyMedyour.seo?.title || (lang === 'ar' ? 'لماذا ميديور؟ | ميديور' : 'Why Medyour? | Medyour'),
      url: `${baseUrl}${base}/why-medyour`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/why-medyour`,
      languages: {
        'ar': `${baseUrl}/why-medyour`,
        'en': `${baseUrl}/en/why-medyour`,
      },
    },
  };
}

export default function WhyMedyourPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

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
    </>
  );
}

export const dynamic = 'force-static';

