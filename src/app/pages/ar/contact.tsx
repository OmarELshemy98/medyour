// pages/contact.tsx

// Content Import - (افتراضي)
import { contactContent as contactPageContent } from '../../content/ar/contact';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import ContactInfoSection from '../../components/sections/contact/ContactInfoSection';
import ContactFormSection from '../../components/sections/contact/ContactFormSection';

const ContactPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { hero, contactInfo, form } = contactPageContent as any;
    const infoMapped = {
        title: 'معلومات الاتصال',
        subtitle: hero.subtitle,
        items: [
            { icon: 'MapPin', title: 'العنوان', value: contactInfo.address },
            { icon: 'Phone', title: 'الهاتف', value: contactInfo.phone, link: `tel:${contactInfo.phone}` },
            { icon: 'Mail', title: 'البريد الإلكتروني', value: contactInfo.email, link: `mailto:${contactInfo.email}` },
            { icon: 'Clock', title: 'ساعات العمل', value: contactInfo.workingHours },
        ],
    };
    
    return (
        <>
            <HtmlNavbarAr/> 
            
            <main className="min-h-screen">
                
                {/* 1. Contact Hero Section (قسم العنوان والوصف) */}
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
                
                {/* 2. Contact Main Content (المعلومات والنماذج) */}
                <section className="py-16 md:py-24 bg-white" dir="rtl">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            
                            {/* العمود الأول: معلومات الاتصال */}
                            <div className="lg:col-span-1">
                                <ContactInfoSection content={infoMapped} />
                            </div>
                            
                            {/* العمود الثاني: نموذج التواصل */}
                            <div className="lg:col-span-2">
                                <ContactFormSection formConfig={form} />
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