import { Metadata } from 'next';
import Script from 'next/script';
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
    keywords: lang === 'ar'
      ? ['الأسئلة الشائعة','معلومات','ميديور','تغطية صحية','تطبيق','سجلات طبية']
      : ['FAQs','information','Medyour','health coverage','app','medical records'],
    openGraph: {
      title: t.faqs.seo?.title || (lang === 'ar' ? 'الأسئلة الشائعة | ميديور' : 'FAQs | Medyour'),
      url: `${baseUrl}${base}/faqs`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqs.seo?.title || (lang === 'ar' ? 'الأسئلة الشائعة | ميديور' : 'FAQs | Medyour'),
      description: t.faqs.seo?.description || (lang === 'ar' ? 'أجوبة لأكثر الأسئلة شيوعًا.' : 'Answers to common questions.'),
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/faqs`,
      languages: {
        'ar': `${baseUrl}/faqs`,
        'en': `${baseUrl}/en/faqs`,
        'x-default': `${baseUrl}/faqs`,
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

export default function FAQsPage({ params }: Props) {
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
      { '@type': 'ListItem', position: 2, name: t.faqs.title, item: `${baseUrl}${base}/faqs` },
    ],
  };

  const translatedFaqs = (t.faqsSection?.faqs || []) as { question: string; answer: string }[];
  const defaultFaqs = isArabic
    ? [
        { question: 'هل التغطية متاحة لجميع الأعمار؟', answer: 'نعم، خطط الرعاية الصحية لدينا تناسب جميع الفئات العمرية بدون استثناء.' },
        { question: 'ما الذي يميز ميديور؟', answer: 'منصة رعاية صحية رقمية توفر وصولًا فوريًا لشبكة واسعة من مقدمي الخدمة عبر تقنيات متقدمة وتجربة سلسة.' },
        { question: 'كيف أصل إلى سجلاتي الطبية؟', answer: 'يمكنك الوصول إلى سجلاتك عبر منصتنا السحابية أو من خلال تطبيق ميديور على هاتفك.' },
      ]
    : [
        { question: 'Is coverage available for all ages?', answer: 'Yes, our plans are designed to accommodate all ages without exception.' },
        { question: 'What sets Medyour apart?', answer: 'A leading digital platform providing instant access to a wide provider network through advanced technology and seamless experiences.' },
        { question: 'How can I access my medical records?', answer: 'You can securely access your records via our cloud platform or through the Medyour mobile app.' },
      ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (translatedFaqs.length ? translatedFaqs : defaultFaqs).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

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
      <Script id="jsonld-breadcrumb-faqs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="jsonld-faqpage" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}

export const dynamic = 'force-static';

