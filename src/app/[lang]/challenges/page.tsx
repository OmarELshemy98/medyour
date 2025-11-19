import { Metadata } from 'next';
import Script from 'next/script';
import UnifiedNavbar from '../../components/layout/UnifiedNavbar';
import HeroHeader from '../../components/common/HeroHeader';
import { getTranslations } from '../../../lib/locales';
import ChallengesSectionAr from '../../components/sections/ar/challenges/ChallengesSection';
import ChallengesSectionEn from '../../components/sections/en/challenges/ChallengesSectionEn';
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
    title: t.challenges.seo?.title || (lang === 'ar' ? 'التحديات | ميديور' : 'Challenges | Medyour'),
    description: t.challenges.seo?.description || (lang === 'ar' ? 'نواجه تحديات الرعاية الصحية بحلول مبتكرة في ميديور.' : 'Medyour addresses healthcare challenges with innovative solutions.'),
    keywords: lang === 'ar'
      ? ['تحديات الرعاية الصحية','تكاليف الرعاية','إتاحة الخدمات','إجراءات إدارية','ميديور','حلول رقمية']
      : ['healthcare challenges','care costs','accessibility','administrative processes','Medyour','digital solutions'],
    openGraph: {
      title: t.challenges.seo?.title || (lang === 'ar' ? 'التحديات | ميديور' : 'Challenges | Medyour'),
      url: `${baseUrl}${base}/challenges`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.challenges.seo?.title || (lang === 'ar' ? 'التحديات | ميديور' : 'Challenges | Medyour'),
      description: t.challenges.seo?.description || (lang === 'ar' ? 'نواجه تحديات الرعاية الصحية بحلول مبتكرة.' : 'Addressing healthcare challenges with innovation.'),
      images: [`${baseUrl}/images/logo-medyour.png`],
    },
    alternates: {
      canonical: `${baseUrl}${base}/challenges`,
      languages: {
        'ar': `${baseUrl}/challenges`,
        'en': `${baseUrl}/en/challenges`,
        'x-default': `${baseUrl}/challenges`,
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

export default function ChallengesPage({ params }: Props) {
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
      { '@type': 'ListItem', position: 2, name: t.challenges.title, item: `${baseUrl}${base}/challenges` },
    ],
  };

  return (
    <>
      <UnifiedNavbar lang={lang} />
      <main>
        <HeroHeader
          title={t.challenges.title}
          subtitle={t.challenges.subtitle}
          backgroundImage={t.challenges.backgroundImage}
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {isArabic ? <ChallengesSectionAr /> : <ChallengesSectionEn />}
      </main>
      {isArabic ? <FooterAr /> : <FooterEn />}
      <Script id="jsonld-breadcrumb-challenges" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export const dynamic = 'force-static';

