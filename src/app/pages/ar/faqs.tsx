// pages/faqs.tsx (الإصدار النهائي)
// Layout Imports
// Section Imports

// Content Import - (افتراضي)
import { faqsContent as faqsPageContent } from '../../content/ar/faqs'; 
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import FAQSection from '../../components/sections/faqs/FAQSection';

const FAQsPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { hero, sections } = faqsPageContent as any;
    
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen">
                
                {/* 1. FAQs Hero Section (قسم العنوان والوصف) */}
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
                
                {/* 2. FAQ Section - الأسئلة والأجوبة */}
                <FAQSection
                    items={(sections || []).flatMap((s: any) => s.faqs || [])}
                    sectionTitle={hero.title}
                    sectionSubtitle={hero.subtitle}
                />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default FAQsPage;