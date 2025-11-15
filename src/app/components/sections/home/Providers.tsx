// components/sections/home/Providers.tsx
import Image from 'next/image';
import { ListSection, ProviderItem } from '../../../types/common'; // استدعاء الأنواع

// تحديد نوع المحتوى المتوقع من homePageContent.providers
interface ProvidersContent extends ListSection {
    backgroundImage: string; // المسار إلى صورة الخلفية
}

interface ProvidersSectionProps {
    content: ProvidersContent;
}

const ProviderIcon: React.FC<ProviderItem> = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <div className="bg-white p-4 rounded-full shadow-lg mb-3">
                <Image src={icon} alt={label} width={40} height={40} />
            </div>
            <p className="text-sm font-semibold text-white">{label}</p>
        </div>
    );
};

const ProvidersSection: React.FC<ProvidersSectionProps> = ({ content }) => {
    return (
        <section 
            className="py-16 md:py-24 relative overflow-hidden" 
            dir="rtl"
        >
            {/* صورة الخلفية */}
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${content.backgroundImage})` }}
            >
                {/* طبقة تراكب داكنة لضمان وضوح النص */}
                <div className="absolute inset-0 bg-[#001218] opacity-85"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                
                {/* العنوان الرئيسي */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 font-cairo">
                        {content.title}
                    </h2>
                    <p className="text-lg font-light text-gray-200">
                        {content.subtitle}
                    </p>
                </div>
                
                {/* شبكة مزودي الخدمة */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
                    {content.list.map((item, index) => (
                        <ProviderIcon key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProvidersSection;