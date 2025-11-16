
// pages/index.tsx (الإصدار النهائي للصفحة الرئيسية)
// Content Import
import Script from 'next/script';

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import LineSeparator from '../../components/common/LineSeparator';
import SecondSectionIntroduction from '../../components/sections/home/SecondSectionIntroduction';
import ThirdSectionWhatMedyour from '../../components/sections/home/thirdSectionWhatMedyour';
import FourthSectionVision from '../../components/sections/home/fourthSectionVision';
import LastSectionCarouselHome from '../../components/sections/home/lastSectionCarouselHome';
import FirstSectionMobileSection from '../../components/sections/home/FirstSectionMobileSection';

// Helper functions for casting icon fields safely

const HomePage: React.FC = () => {
  // Use 'as any' to allow flexible destructuring. Can be refined based on exact type imports.

  return (
    <>
      <HtmlNavbarAr mode="static" home />

      <main className="min-h-screen text-[#123D46] pt-[85px]">
        {/* 1. قسم الهيرو مطابق لنسخة HTML */}
        <FirstSectionMobileSection />
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