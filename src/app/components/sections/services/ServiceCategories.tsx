// components/sections/services/ServiceCategories.tsx
import Image from 'next/image';
import Link from 'next/link';

// تحديد نوع محتوى الفئة
interface ServiceCategoryItem {
    title: string;
    description: string;
    icon: string;
    link: string;
}

interface ServiceCategoriesContent {
    title: string;
    subtitle: string;
    categories: ServiceCategoryItem[];
}

interface ServiceCategoriesSectionProps {
    content: ServiceCategoriesContent;
}

const CategoryCard: React.FC<ServiceCategoryItem> = ({ title, description, icon, link }) => {
    return (
        <Link 
            href={link} 
            className="group flex flex-col p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full"
        >
            <div className="flex-shrink-0 mb-4">
                {/* الأيقونة */}
                <Image src={icon} alt={title} width={48} height={48} className="text-[#001218]" />
            </div>
            
            <h3 className="text-xl font-bold text-[#001218] font-cairo mb-2 group-hover:text-[#06D6A0] transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 flex-grow">
                {description}
            </p>
            
            {/* رابط "اكتشف المزيد" */}
            <p className="mt-4 text-sm font-semibold text-[#06D6A0] group-hover:underline flex items-center space-x-2 space-x-reverse">
                <span>اكتشف المزيد</span>
                {/* أيقونة السهم */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </p>
        </Link>
    );
};

const ServiceCategoriesSection: React.FC<ServiceCategoriesSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* العنوان الرئيسي للقسم */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#001218] font-cairo mb-3">
                        {content.title}
                    </h2>
                    <p className="text-lg font-light text-gray-600">
                        {content.subtitle}
                    </p>
                </div>
                
                {/* شبكة الفئات (3 في الصف) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceCategoriesSection;