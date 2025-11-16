// pages/index.tsx (الإصدار النهائي للصفحة الرئيسية)
// Content Import
import { homePageContent } from '../../content/ar/index';

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import BenefitsSection from '../../components/sections/home/mobileSection';
import IntroductionSection from '../../components/sections/home/introduction';
import ThirdSection from '../../components/sections/home/thirdSection';
import VisionSection from '../../components/sections/home/visionHome';
import CarouselHome from '../../components/sections/home/carouselHome';
import LineSeparator from '../../components/common/LineSeparator';


// Helper functions for casting icon fields safely
const castBenefits = (benefits: any[]): { icon: "Clock" | "Shield" | "Users" | "Smartphone"; title: string; description: string; }[] =>
  benefits.map((benefit) => ({
    ...benefit,
    icon: benefit.icon as "Clock" | "Shield" | "Users" | "Smartphone",
  }));

const castSpecialities = (specialities: any[]): { icon: "Heart" | "Brain" | "Activity" | "Baby" | "Eye" | "Bone"; name: string; count: string; }[] =>
  specialities.map((spec) => ({
    ...spec,
    icon: spec.icon as "Heart" | "Brain" | "Activity" | "Baby" | "Eye" | "Bone",
  }));

const HomePage: React.FC = () => {
  // Use 'as any' to allow flexible destructuring. Can be refined based on exact type imports.
  const { seo, hero, benefits, providers, specialities, technology, testimonials, cta } = homePageContent as any;

  return (
    <>
      <HtmlNavbarAr />

      <main className="max-w-7xl mx-auto">
        {/* 1. قسم الهيرو مطابق لنسخة HTML */}

        <BenefitsSection content={benefits}/>
        <IntroductionSection/>
        <LineSeparator/>
        <ThirdSection/>
        <LineSeparator/>
        <VisionSection/>
        <CarouselHome/>

      </main>

      <HtmlFooterAr />
    </>
  );
};

export default HomePage;