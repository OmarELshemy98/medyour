import { Metadata } from 'next';
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
    openGraph: {
      title: t.challenges.seo?.title || (lang === 'ar' ? 'التحديات | ميديور' : 'Challenges | Medyour'),
      url: `${baseUrl}${base}/challenges`,
      images: [{ url: `${baseUrl}/images/logo-medyour.png` }],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}${base}/challenges`,
      languages: {
        'ar': `${baseUrl}/challenges`,
        'en': `${baseUrl}/en/challenges`,
      },
    },
  };
}

export default function ChallengesPage({ params }: Props) {
  const { lang } = params;
  const t = getTranslations(lang);
  const isArabic = lang === 'ar';

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
    </>
  );
}

export const dynamic = 'force-static';

