// components/sections/home/Benefits.tsx
import Image from 'next/image';
import { ContentItem } from '../../../types/common'; // استدعاء واجهة ContentItem

// واجهة المكون
interface BenefitsSectionProps {
    content: ContentItem[]; // content هو مصفوفة من العناصر (benefits: [...])
}

// مكون البطاقة الواحدة
const BenefitCard: React.FC<ContentItem> = ({ icon, title, description }) => {
    return (
        // تصميم البطاقة مأخوذ من كود index.html
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            {/* الأيقونة */}
            <div className="mb-4 bg-[#06D6A0] p-4 rounded-full inline-block">
                <Image src={icon} alt={title} width={36} height={36} />
            </div>
            
            {/* العنوان */}
            <h3 className="text-xl font-bold text-[#001218] mb-3 font-cairo">
                {title}
            </h3>
            
            {/* الوصف */}
            <p className="text-gray-600 text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-[#F8F9FA]" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* شبكة البطاقات */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.map((item, index) => (
                        <BenefitCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;