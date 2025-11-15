// components/sections/home/CtaSection.tsx
import Link from 'next/link';
import Image from 'next/image';

// تحديد نوع المحتوى المتوقع من homePageContent.cta
interface CtaContent {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage: string; // صورة خلفية للقسم
}

interface CtaSectionProps {
    content: CtaContent;
}

const CtaSection: React.FC<CtaSectionProps> = ({ content }) => {
    return (
        <section className="py-24 relative" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* صندوق الـ CTA */}
                <div 
                    className="relative bg-[#001218] text-white p-10 md:p-16 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ 
                        backgroundImage: `url(${content.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* طبقة تراكب لزيادة التباين */}
                    <div className="absolute inset-0 bg-[#001218] opacity-90"></div>
                    
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-cairo leading-tight">
                            {content.title}
                        </h2>
                        <p className="text-xl font-light mb-8 text-gray-300">
                            {content.subtitle}
                        </p>
                        <Link 
                            href={content.buttonLink}
                            className="inline-block bg-[#06D6A0] text-[#001218] text-lg font-bold py-3 px-10 rounded-full hover:bg-[#04C791] transition-colors shadow-lg transform hover:scale-105"
                        >
                            {content.buttonText}
                        </Link>
                    </div>

                    {/* عناصر رسومية إضافية (مثل الأيقونات العائمة) يمكن إضافتها هنا */}
                </div>

            </div>
        </section>
    );
};

export default CtaSection;