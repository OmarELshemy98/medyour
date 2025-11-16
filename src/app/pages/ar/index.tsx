
// pages/index.tsx (الإصدار النهائي للصفحة الرئيسية)
// Content Import
import { homePageContent } from '../../content/ar/index';

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import LineSeparator from '../../components/common/LineSeparator';
import FirstSectionMobileSection from '../../components/sections/home/FirstSectionMobileSection';
import SecondSectionIntroduction from '../../components/sections/home/SecondSectionIntroduction';
import ThirdSectionWhatMedyour from '../../components/sections/home/thirdSectionWhatMedyour';
import FourthSectionVision from '../../components/sections/home/fourthSectionVision';
import LastSectionCarouselHome from '../../components/sections/home/lastSectionCarouselHome';

// Helper functions for casting icon fields safely

const HomePage: React.FC = () => {
  // Use 'as any' to allow flexible destructuring. Can be refined based on exact type imports.

  return (
    <>
      <HtmlNavbarAr mode="static" home />

      <main className="max-w-7xl mx-auto">
        {/* 1. قسم الهيرو مطابق لنسخة HTML */}
        <FirstSectionMobileSection  />
        <SecondSectionIntroduction />
        <LineSeparator />
        <ThirdSectionWhatMedyour />
        <LineSeparator />
        <FourthSectionVision />
        <LastSectionCarouselHome />
      </main>

      <HtmlFooterAr />
      <script src="/js/script.js"></script>
    </>
  );
};

export default HomePage;