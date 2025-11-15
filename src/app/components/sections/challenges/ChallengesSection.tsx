import React from 'react';

// تعريف واجهة بيانات التحدي
interface ChallengeItem {
    id: number;
    title: string;
    description: string;
    icon: string; // سيتم استخدام SVG مضمنة أو أيقونة بسيطة
    color: string; // لون مميز للبطاقة (Tailwind class: e.g., 'text-blue-600', 'bg-yellow-100')
}

interface ChallengesSectionProps {
    challenges: ChallengeItem[];
}

// الأيقونات كـ Inline SVG (لمنع مشاكل الـ module not found)
const IconMap: { [key: string]: React.FC<{ className: string }> } = {
    // أيقونة 1: القلب (للتحديات الصحية)
    'Heart': ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    ),
    // أيقونة 2: الترس (للتحديات التشغيلية/الإدارية)
    'Gear': ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.7 13.7c.6-1.5.6-3.3 0-4.8a1 1 0 0 0-1-1.2h-3.3a1 1 0 0 1-.9-.6 1 1 0 0 0-.7-1.4L12 3l-1.8 3.5a1 1 0 0 0-.7 1.4 1 1 0 0 1-.9.6H5.3a1 1 0 0 0-1 1.2c-.6 1.5-.6 3.3 0 4.8a1 1 0 0 0 1 1.2h3.3a1 1 0 0 1 .9.6 1 1 0 0 0 .7 1.4l1.8 3.5 1.8-3.5a1 1 0 0 0 .7-1.4 1 1 0 0 1 .9-.6h3.3a1 1 0 0 0 1-1.2Z" />
        </svg>
    ),
    // أيقونة 3: العين (للتحديات المتعلقة بالشفافية/الجودة)
    'Eye': ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
        </svg>
    ),
    // أيقونة 4: البرق (للتحديات المتعلقة بالسرعة والوصول)
    'Bolt': ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 2h3l-3 7h4l-7 13 3-9H7l4-7Z" />
        </svg>
    ),
};


const ChallengesSection: React.FC<ChallengesSectionProps> = ({ challenges }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* شبكة البطاقات (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challenges.map((challenge) => {
                        // تحديد الأيقونة واللون بناءً على بيانات التحدي
                        const IconComponent = IconMap[challenge.icon] || IconMap['Heart']; 
                        const iconColorClass = `text-${challenge.color}`;
                        
                        return (
                            <div 
                                key={challenge.id} 
                                className="bg-[#F8F9FA] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#06D6A0]"
                            >
                                {/* منطقة الأيقونة */}
                                <div className={`flex justify-center items-center w-16 h-16 rounded-full ${iconColorClass} bg-white shadow-md mb-6 mx-auto`}>
                                    <IconComponent className="w-8 h-8" />
                                </div>

                                {/* عنوان التحدي */}
                                <h3 className="text-xl font-bold text-[#001218] font-cairo text-center mb-3">
                                    {challenge.title}
                                </h3>
                                
                                {/* وصف التحدي */}
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
                
                {/* زر الدعوة لاتخاذ إجراء (CTA) أسفل القائمة */}
                <div className="text-center mt-16">
                    <button className="bg-[#06D6A0] text-[#001218] text-lg font-bold py-3 px-10 rounded-full hover:bg-[#001218] hover:text-white transition-colors shadow-lg">
                        اكتشف حلولنا للتغلب على هذه التحديات
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ChallengesSection;