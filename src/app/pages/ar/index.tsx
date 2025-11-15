// pages/index.tsx (الإصدار النهائي للصفحة الرئيسية)
// Content Import
import { homePageContent } from '../../content/ar/index';

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import HeroSection from '../../components/sections/home/HeroSection';
import ProvidersSection from '../../components/sections/home/Providers';
import BenefitsSection from '../../components/sections/home/Benefits';
import SpecialitiesSection from '../../components/sections/home/Specialities';
import TechnologySection from '../../components/sections/home/Technology';
import TestimonialsSection from '../../components/sections/home/Testimonials';
import CtaSection from '../../components/sections/home/CtaSection';

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

      <main className="min-h-screen">
        {/* 1. قسم الهيرو */}
        <HeroSection content={hero} />

        {/* 2. قسم المزايا */}
        <BenefitsSection content={{
          ...benefits,
          benefits: castBenefits(benefits.benefits),
        }} />

        {/* 3. قسم مقدمي الخدمة */}
        <ProvidersSection content={providers} />

        {/* 4. قسم التخصصات */}
        <SpecialitiesSection content={{
          ...specialities,
          specialities: castSpecialities(specialities.specialities),
        }} />

        {/* 5. قسم التكنولوجيا (المميزات) */}
        <TechnologySection content={technology as any} />

        {/* 6. قسم آراء العملاء */}
        <TestimonialsSection content={testimonials as any} />

        {/* 7. قسم الدعوة للعمل */}
        <CtaSection content={cta as any} />
      </main>

      <HtmlFooterAr />
    </>
  );
};

export default HomePage;