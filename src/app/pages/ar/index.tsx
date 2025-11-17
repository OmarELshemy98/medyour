
// pages/index.tsx (الإصدار النهائي للصفحة الرئيسية)
// Content Import
import Script from 'next/script';

import LineSeparator from '../../components/common/LineSeparator';
import SecondSectionIntroduction from '../../components/sections/ar/home/SecondSectionIntroduction';
import ThirdSectionWhatMedyour from '../../components/sections/ar/home/thirdSectionWhatMedyour';
import FourthSectionVision from '../../components/sections/ar/home/fourthSectionVision';
import LastSectionCarouselHome from '../../components/sections/ar/home/lastSectionCarouselHome';
import FirstSectionMobileSection from '../../components/sections/ar/home/FirstSectionMobileSection';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import HomeNavbar from '../../components/sections/ar/navbar/HomeNavbar';

// Helper functions for casting icon fields safely

const HomePage: React.FC = () => {
  // Use 'as any' to allow flexible destructuring. Can be refined based on exact type imports.

  return (
    <>
      <HomeNavbar mode="static" home />

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

      <FooterAr />

      <script src="/js/script.js"></script>
    </>
  );
};

export default HomePage;