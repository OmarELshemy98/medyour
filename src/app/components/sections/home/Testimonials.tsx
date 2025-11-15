// components/sections/home/Testimonials.tsx
import Image from 'next/image';

// تحديد نوع المحتوى المتوقع من homePageContent.testimonials
interface TestimonialItem {
    quote: string;
    name: string;
    title: string; // الوظيفة/المنصب
    avatar: string; // مسار الصورة
}

interface TestimonialsContent {
    title: string;
    subtitle: string;
    list: TestimonialItem[];
}

interface TestimonialsSectionProps {
    content: TestimonialsContent;
}

const TestimonialCard: React.FC<TestimonialItem> = ({ quote, name, title, avatar }) => {
    return (
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-lg border border-gray-100 h-full">
            {/* علامة الاقتباس (اقتباس SVG أو أيقونة) */}
            <svg 
                className="w-8 h-8 text-[#06D6A0] mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
            >
                <path d="M13 14h3.812l-.999 5h-2.813l1-5zm-6 0h3.812l-.999 5H6l1-5zM20 7h-6v2h6V7zm-6 4h6v2h-6v-2z"/>
            </svg>

            {/* النص المقتبس */}
            <p className="text-gray-700 italic text-lg mb-6  leading-relaxed">
                "{quote}"
            </p>

            {/* معلومات العميل */}
            <div className="flex items-center space-x-4 space-x-reverse mt-auto">
                <Image 
                    src={avatar} 
                    alt={name} 
                    width={56} 
                    height={56} 
                    className="rounded-full object-cover border-2 border-[#06D6A0]"
                />
                <div>
                    <p className="text-lg font-bold text-[#001218]">{name}</p>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-[#F8F9FA]" dir="rtl">
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

                {/* شبكة آراء العملاء (عرض 2 أو 3 في الصف للمظهر الجمالي) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {content.list.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default TestimonialsSection;