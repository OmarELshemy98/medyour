// components/sections/services/CoreServices.tsx
import Image from 'next/image';
import Link from 'next/link';

// تحديد نوع محتوى الخدمة الأساسية
interface CoreServiceItem {
    title: string;
    description: string;
    icon: string;
}

interface CoreServicesContent {
    title: string;
    subtitle: string;
    features: CoreServiceItem[]; // قائمة بالميزات
    mainImage: string; // صورة توضيحية للخدمات
    ctaButtonText: string;
    ctaButtonLink: string;
}

interface CoreServicesSectionProps {
    content: CoreServicesContent;
}

const ServiceFeature: React.FC<CoreServiceItem> = ({ title, description, icon }) => {
    return (
        <div className="flex items-start space-x-4 space-x-reverse mb-8">
            {/* الأيقونة */}
            <div className="flex-shrink-0 p-3 bg-[#06D6A0] rounded-full">
                <Image src={icon} alt={title} width={24} height={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#001218] font-cairo mb-1">{title}</h3>
                <p className="text-gray-600 text-base">{description}</p>
            </div>
        </div>
    );
};

const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-[#F8F9FA]" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* عنوان القسم */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#001218] font-cairo mb-3">
                        {content.title}
                    </h2>
                    <p className="text-lg font-light text-gray-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* 1. قائمة الميزات */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        {content.features.map((feature, index) => (
                            <ServiceFeature key={index} {...feature} />
                        ))}
                        
                        {/* زر الدعوة للعمل */}
                        <div className="mt-8 text-right">
                            <Link 
                                href={content.ctaButtonLink}
                                className="inline-block bg-[#001218] text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-[#06D6A0] hover:text-[#001218] transition-colors shadow-lg"
                            >
                                {content.ctaButtonText}
                            </Link>
                        </div>
                    </div>

                    {/* 2. الصورة الرئيسية */}
                    <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <Image 
                            src={content.mainImage} 
                            alt={content.title} 
                            width={500} 
                            height={500} 
                            className="rounded-xl shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreServicesSection;