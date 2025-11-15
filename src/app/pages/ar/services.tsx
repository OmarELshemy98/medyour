// pages/services.tsx (الإصدار النهائي)
import Head from 'next/head';
// Layout Imports
// Section Imports

// Content Import - (افتراضي)
import { servicesContent as servicesPageContent } from '@/app/content/ar/services'; 

import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import CtaSection from '@/app/components/sections/home/CtaSection';
import ServiceCategoriesSection from '@/app/components/sections/services/ServiceCategories';
import CoreServicesSection from '@/app/components/sections/services/CoreServices';
import PartnersSection from '@/app/components/sections/services/Partners';

const ServicesPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { seo, hero, serviceCategories, coreServices, partners, cta } = servicesPageContent as any;
    
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <html lang="ar" dir="rtl" />
            </Head>

            <Navbar /> 
            
            <main className="min-h-screen">
                
                {/* 1. Services Hero Section (العنوان والوصف) */}
                <section className="pt-24 md:pt-32 pb-16 bg-[#F8F9FA]" dir="rtl">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] font-cairo mb-4">
                            {hero.title}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {hero.subtitle}
                        </p>
                    </div>
                </section>
                
                {/* 2. Service Categories (فئات الخدمات) */}
                <ServiceCategoriesSection content={serviceCategories} />

                {/* 3. Core Services (الخدمات الأساسية) */}
                <CoreServicesSection content={coreServices} />

                {/* 4. Partners Section (شركاؤنا) */}
                <PartnersSection content={partners} />
                
                {/* 5. Cta Section (الدعوة للعمل) */}
                <CtaSection content={cta} />
                
            </main>

            <Footer /> 
        </>
    );
};

export default ServicesPage;