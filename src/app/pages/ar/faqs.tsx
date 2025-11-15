// pages/faqs.tsx (الإصدار النهائي)
import Head from 'next/head';
// Layout Imports
// Section Imports

// Content Import - (افتراضي)
import { faqsContent as faqsPageContent } from '@/app/content/ar/faqs'; 
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import FAQSection from '@/app/components/sections/faqs/FAQSection';

const FAQsPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { seo, hero, faqItems, sectionTitle, sectionSubtitle } = faqsPageContent as any;
    
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <html lang="ar" dir="rtl" />
            </Head>

            <Navbar /> 
            
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
                    items={faqItems} 
                    sectionTitle={sectionTitle || "أسئلة شائعة"} // استخدام قيمة افتراضية في حال عدم وجودها
                    sectionSubtitle={sectionSubtitle || "ابحث عن إجابة استفسارك هنا."}
                />
                
            </main>

            <Footer /> 
        </>
    );
};

export default FAQsPage;