// components/sections/home/Specialities.tsx
import Image from 'next/image';
import { ListSection, ProviderItem } from '../../../types/common'; // المسار النسبي: الخروج 3 مرات من مجلد home

// تحديد نوع المحتوى المتوقع من homePageContent.specialities
interface SpecialitiesSectionProps {
    content: ListSection; // { title, subtitle, list: ProviderItem[] }
}

const SpecialityCard: React.FC<ProviderItem> = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* الأيقونة */}
            <div className="mb-3 bg-gray-100 p-3 rounded-full">
                {/* نفترض أن الأيقونات موجودة في public/icons/specialities/ */}
                <Image src={icon} alt={label} width={32} height={32} />
            </div>
            
            {/* العنوان */}
            <p className="text-sm font-semibold text-[#001218] mt-2">
                {label}
            </p>
        </div>
    );
};

const SpecialitiesSection: React.FC<SpecialitiesSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* العنوان الرئيسي */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#001218] mb-3 font-cairo">
                        {content.title}
                    </h2>
                    <p className="text-lg font-light text-gray-600">
                        {content.subtitle}
                    </p>
                </div>
                
                {/* شبكة التخصصات */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {content.list.map((item, index) => (
                        <SpecialityCard key={index} {...item} />
                    ))}
                </div>

                {/* زر الدعوة للعمل إذا كان موجوداً في التصميم الأصلي أسفل هذا القسم */}
                {/* <div className="text-center mt-12">
                    <Link href="/services" className="text-[#001218] font-bold border-2 border-[#001218] py-3 px-8 rounded-full hover:bg-[#001218] hover:text-white transition-colors">
                        شاهد المزيد من التخصصات
                    </Link>
                </div> */}
            </div>
        </section>
    );
};

export default SpecialitiesSection;