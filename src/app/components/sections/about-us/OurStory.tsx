// components/sections/about-us/OurStory.tsx
import Image from 'next/image';

interface StoryContent {
    sectionTitle: string;
    title: string;
    paragraphs: string[];
    image: string;
}

interface OurStorySectionProps {
    content: StoryContent;
}

// المسار النسبي: الخروج 3 مرات من مجلد about-us للوصول إلى public/
// (نستخدم المسار النسبي: الخروج مرتين للوصول إلى components/sections/ ثم مرة للوصول إلى المجلد root)
// المسار من components/sections/about-us/OurStory.tsx إلى public/images هو: ../../../public
// لكن في Next.js نستخدم المسار المطلق /images/
const ImagePath = (path: string) => path; // دالة للمساعدة في مسارات الصور

const OurStorySection: React.FC<OurStorySectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* العنوان الرئيسي للقسم */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-[#06D6A0] uppercase tracking-wider block mb-2">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#001218] font-cairo">
                        {content.title}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* 1. المحتوى النصي */}
                    <div className="lg:w-1/2">
                        {content.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* 2. الصورة */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <Image 
                            src={ImagePath(content.image)} // نفترض أن المسار يبدأ بـ /images
                            alt={content.title} 
                            width={550} 
                            height={400} 
                            className="rounded-xl shadow-2xl object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurStorySection;