// components/sections/home/Technology.tsx
import Image from 'next/image';
import Link from 'next/link';

// تحديد نوع المحتوى المتوقع من homePageContent.technology
interface FeatureItem {
    title: string;
    description: string;
    icon: string;
}

interface TechnologyContent {
    title: string;
    subtitle: string;
    features: FeatureItem[];
    mainImage: string; // صورة شاشة التطبيق
    buttonText: string;
    buttonLink: string;
}

interface TechnologySectionProps {
    content: TechnologyContent;
}

// المسار النسبي: الخروج 3 مرات من مجلد home للوصول إلى public/
const IconBase = '../../../public'; 

const FeatureCard: React.FC<FeatureItem> = ({ title, description, icon }) => {
    return (
        <div className="flex items-start space-x-4 space-x-reverse mb-6">
            <div className="shrink-0">
                {/* الأيقونة */}
                <Image src={icon} alt={title} width={36} height={36} className="text-[#06D6A0] mt-1" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#001218] mb-1 font-cairo">{title}</h3>
                <p className="text-gray-600 text-base">{description}</p>
            </div>
        </div>
    );
};

const TechnologySection: React.FC<TechnologySectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* العنوان الرئيسي */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#001218] mb-3 font-cairo">
                        {content.title}
                    </h2>
                    <p className="text-lg font-light text-gray-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* 1. قائمة المزايا */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        {content.features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                        
                        {/* زر الدعوة للعمل */}
                        <div className="mt-8 text-right">
                            <Link 
                                href={content.buttonLink}
                                className="inline-block bg-[#001218] text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-[#06D6A0] hover:text-[#001218] transition-colors shadow-lg"
                            >
                                {content.buttonText}
                            </Link>
                        </div>
                    </div>

                    {/* 2. صورة التطبيق (Mobile Mockup) */}
                    <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <Image 
                            src={content.mainImage} 
                            alt="Medyour App Interface Features" 
                            width={500} 
                            height={600} 
                            className="rounded-xl shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechnologySection;