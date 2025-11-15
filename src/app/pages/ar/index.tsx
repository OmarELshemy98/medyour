// pages/index.tsx (الإصدار النهائي للصفحة الرئيسية)
import Head from 'next/head';
// Content Import
import { homePageContent } from '../../content/ar/index';
import HeroSection from '@/app/components/sections/home/HeroSection';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import BenefitsSection from '@/app/components/sections/home/Benefits';
import ProvidersSection from '@/app/components/sections/home/Providers';
import SpecialitiesSection from '@/app/components/sections/home/Specialities';
import TechnologySection from '@/app/components/sections/home/Technology';
import TestimonialsSection from '@/app/components/sections/home/Testimonials';
import CtaSection from '@/app/components/sections/home/CtaSection';

const HomePage: React.FC = () => {
  const { seo, hero, benefits, providers, specialities, technology, testimonials, cta } = homePageContent;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {/* إعداد اتجاه القراءة للغة العربية */}
        {/* 
          ملاحظة هامة: لا تضع عنصر <html> داخل <Head> 
          بل يمكنك ضبط اللغة والاتجاه في _document.tsx أو عبر خاصية dir/lang في العنصر الجذر أو body 
        */}
      </Head>

      <Navbar isHome={true} />

      <main className="min-h-screen">
        {/* 1. قسم الهيرو */}
        <HeroSection content={hero} />

        {/* 2. قسم المزايا */}
        <BenefitsSection content={benefits} />

        {/* 3. قسم مقدمي الخدمة */}
        <ProvidersSection content={providers} />

        {/* 4. قسم التخصصات */}
        <SpecialitiesSection content={specialities} />

        {/* 5. قسم التكنولوجيا (المميزات) */}
        <TechnologySection content={technology as any} />

        {/* 6. قسم آراء العملاء */}
        <TestimonialsSection content={testimonials as any} />

        {/* 7. قسم الدعوة للعمل */}
        <CtaSection content={cta as any} />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;