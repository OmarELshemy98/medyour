// components/sections/about-us/VisionMission.tsx
import Image from 'next/image';

// تحديد نوع المحتوى المتوقع
interface VisionMissionContent {
    vision: {
        title: string;
        description: string;
        icon: string;
    };
    mission: {
        title: string;
        description: string;
        icon: string;
    };
}

interface VisionMissionSectionProps {
    content: VisionMissionContent;
}

// مكون بطاقة الرؤية/الرسالة
const VisionCard: React.FC<{ title: string, description: string, icon: string, isVision: boolean }> = ({ title, description, icon, isVision }) => {
    // تحديد الألوان بناءً على ما إذا كانت البطاقة للرؤية أم للرسالة
    const bgColor = isVision ? 'bg-[#06D6A0]' : 'bg-[#001218]';
    const iconBgColor = isVision ? 'bg-white' : 'bg-[#06D6A0]';
    const titleColor = isVision ? 'text-[#001218]' : 'text-white';
    const descriptionColor = isVision ? 'text-gray-800' : 'text-gray-300';

    return (
        <div className={`p-8 rounded-xl shadow-2xl transition-shadow duration-300 h-full ${bgColor}`}>
            <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <div className={`shrink-0 p-3 rounded-full ${iconBgColor}`}>
                    {/* الأيقونة */}
                    {/* نفترض أن الأيقونات موجودة ومناسبة */}
                    <Image src={icon} alt={title} width={32} height={32} />
                </div>
                <h3 className={`text-3xl font-extrabold ${titleColor} font-cairo`}>
                    {title}
                </h3>
            </div>
            <p className={`text-lg leading-relaxed ${descriptionColor}`}>
                {description}
            </p>
        </div>
    );
};

const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ content }) => {
    return (
        <section className="py-16 md:py-24 bg-[#F8F9FA]" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* شبكة الرؤية والرسالة */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 1. الرؤية */}
                    <VisionCard 
                        title={content.vision.title}
                        description={content.vision.description}
                        icon={content.vision.icon}
                        isVision={true}
                    />

                    {/* 2. الرسالة */}
                    <VisionCard 
                        title={content.mission.title}
                        description={content.mission.description}
                        icon={content.mission.icon}
                        isVision={false}
                    />
                </div>

            </div>
        </section>
    );
};

export default VisionMissionSection;