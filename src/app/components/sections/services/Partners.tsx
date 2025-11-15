// components/sections/services/Partners.tsx
import Image from 'next/image';

// تحديد نوع المحتوى المتوقع
interface PartnerLogo {
    logo: string; // مسار شعار الشريك
    name: string;
}

interface PartnersContent {
    title: string;
    subtitle: string;
    logos: PartnerLogo[];
}

interface PartnersSectionProps {
    content: PartnersContent;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
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

                {/* شبكة الشركاء */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    {content.logos.map((partner, index) => (
                        <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <Image 
                                src={partner.logo} 
                                alt={partner.name} 
                                width={120} 
                                height={60} 
                                style={{ width: 'auto', height: '60px' }} // للحفاظ على نسبة العرض/الارتفاع للشعار
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PartnersSection;