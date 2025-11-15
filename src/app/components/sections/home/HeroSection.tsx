// components/sections/home/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

// استدعاء الأنواع (يفترض أن common.ts يضم الواجهة الخاصة بالـ Hero)
// سنفترض وجود واجهة HeroContent: { title: string, subtitle: string, buttonText: string, ... }
// وبما أننا لم نقم بإنشائها مسبقاً، سنكتفي بالواجهة العامة الآن.

// تحديد نوع المحتوى المتوقع من homePageContent.hero
interface HeroContent {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    mainImage: string; // /images/background_img.png
    appImage: string;  // /images/mobile-app.png
}

interface HeroSectionProps {
    content: HeroContent;
}

// كود الـ CSS لحركة الطفو (Floating Animation)
const FloatAnimationStyles = `
  @keyframes floatAndRotate {
    0% { transform: translateY(0px); opacity: 0.8; }
    50% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(0px); opacity: 0.8; }
  }
  .animate-float {
    animation: floatAndRotate 3s ease-in-out infinite;
  }
`;

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
    return (
        <section 
            className="relative h-[90vh] md:h-[100vh] bg-cover bg-center pt-24 pb-12" 
            style={{ 
                backgroundImage: `url(${content.mainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            dir="rtl"
        >
            {/* إضافة حركات CSS المضمنة */}
            <style jsx global>{`
                ${FloatAnimationStyles}
            `}</style>

            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
                
                {/* 1. المحتوى النصي والدعوة للعمل */}
                <div className="md:w-1/2 text-center md:text-right text-white z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-cairo">
                        {content.title}
                    </h1>
                    <p className="text-lg sm:text-xl font-light mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
                        {content.subtitle}
                    </p>
                    <Link 
                        href={content.buttonLink}
                        className="bg-[#06D6A0] text-[#001218] text-center text-lg font-bold py-3 px-8 rounded-full inline-block hover:bg-[#04C791] transition-colors shadow-lg"
                    >
                        {content.buttonText}
                    </Link>
                </div>

                {/* 2. صورة التطبيق العائمة */}
                <div className="hidden md:flex md:w-1/2 justify-center mt-12 md:mt-0 relative">
                    <Image 
                        src={content.appImage} 
                        alt="Medyour Mobile App Interface" 
                        width={450} 
                        height={600} 
                        priority // لتحسين أداء تحميل الصورة
                        className="animate-float" 
                    />
                    {/* إضافة الأشكال الهندسية العائمة الأخرى إن وجدت في التصميم الأصلي (مثل النقاط/الدوائر) */}
                </div>

            </div>

            {/* طبقة تراكب داكنة لضمان وضوح النص فوق الصورة */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
        </section>
    );
};

export default HeroSection;