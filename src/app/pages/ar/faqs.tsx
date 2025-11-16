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
                <HeroHeader title={hero.title} subtitle={hero.subtitle} backgroundImage={hero.image} dir="rtl" />
                
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
import HeroHeader from '../../components/common/HeroHeader';