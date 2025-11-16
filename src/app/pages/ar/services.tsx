// pages/services.tsx (الإصدار النهائي)
// Section Imports

// Content Import - (افتراضي)
import { servicesContent as servicesPageContent } from '../../content/ar/services'; 

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';

const ServicesPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { pageHero, serviceCategories, coreServices, partners, cta } = servicesPageContent as any;
    
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen">
                
                {/* 1. Services Hero Section (العنوان والوصف) */}
                <HeroHeader title={pageHero.mainTitle} subtitle={pageHero.description} backgroundImage={'/images/background-img.png'} dir="rtl" />
                
                {/* 2. Main Services Grid (الخدمات الأساسية من المحتوى) */}
                <section className="py-12">
                  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
                    {(servicesPageContent.mainServices?.list || []).map((s: any, idx: number) => (
                      <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                        <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                        <p className="text-gray-700">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. CTA Section (الدعوة للعمل) */}
               
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default ServicesPage;
import HeroHeader from '../../components/common/HeroHeader';