// pages/contact.tsx

// Content Import - (افتراضي)
import { contactContent as contactPageContent } from '../../content/ar/contact';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import ContactFormSection from '../../components/sections/contact/contact';
import HeroHeader from '../../components/common/HeroHeader';

const ContactPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { hero, form } = contactPageContent as any;
    
    return (
        <>
            <HtmlNavbarAr/> 
            
            <main className="min-h-screen">
                <HeroHeader title={hero.title} subtitle={hero.subtitle} backgroundImage={hero.image || '/images/background-img.png'} dir="rtl" />
                
                {/* 2. Contact Main Content (المعلومات والنماذج) */}
                <section className="py-16 md:py-24 bg-white" dir="rtl">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            
                        
                            
                            {/* العمود الثاني: نموذج التواصل */}
                            <div className="lg:col-span-2">
                                <ContactFormSection />
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default ContactPage;