import { Metadata } from 'next';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import FAQSectionAr from '../../components/sections/ar/faqs/FAQSection';
import FAQSectionEn from '../../components/sections/en/faqs/FAQSectionEn';
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
    title: t.faqs.seo?.title || (lang === 'ar' ? 'الأسئلة الشائعة | ميديور' : 'FAQs | Medyour'),
    description: t.faqs.seo?.description || (lang === 'ar' ? 'ابحث عن إجابات لأكثر الأسئلة شيوعًا حول خدمات ميديور.' : 'Find answers to frequently asked questions about Medyour services.'),
    openGraph: {
      title: t.faqs.seo?.title || (lang === 'ar' ? 'الأسئلة الشائعة | ميديور' : 'FAQs | Medyour'),
      url: `${baseUrl}${base}/faqs`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/faqs`,
      languages: {
        'ar': `${baseUrl}/faqs`,
        'en': `${baseUrl}/en/faqs`,
      },
    },
  };
}

export default function FAQsPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.faqs.title}
          subtitle={t.faqs.subtitle}
          backgroundImage={t.faqs.backgroundImage}
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <FAQSectionAr /> : <FAQSectionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
    </>
  );
}

export const dynamic = 'force-static';

