// components/sections/about-us/Team.tsx
import Image from 'next/image';
// لا نحتاج لـ import من types/common هنا إذا كانت الواجهات معرفة داخل الملف
// ولكن يفضل تعريفها في common.ts لضمان الاتساق

// تحديد نوع المحتوى المتوقع
interface SocialLink {
    icon: string; // مسار الأيقونة (مثال: /icons/linkedin.svg)
    href: string;
}

interface TeamMember {
    name: string;
    title: string;
    avatar: string; // مسار الصورة الشخصية
    socialLinks: SocialLink[];
}

interface TeamContent {
    title: string;
    subtitle: string;
    members: TeamMember[];
}

interface TeamSectionProps {
    content: TeamContent;
}

// مكون بطاقة عضو الفريق
const TeamCard: React.FC<TeamMember> = ({ name, title, avatar, socialLinks }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-shadow duration-300">
            {/* الصورة الشخصية */}
            <div className="mb-4">
                <Image 
                    src={avatar} 
                    alt={name} 
                    width={160} 
                    height={160} 
                    className="rounded-full object-cover w-40 h-40 border-4 border-[#06D6A0] shadow-md"
                />
            </div>
            
            {/* الاسم والمنصب */}
            <h3 className="text-xl font-bold text-[#001218] font-cairo mb-1">{name}</h3>
            <p className="text-md text-gray-500 mb-4">{title}</p>
            
            {/* روابط التواصل الاجتماعي */}
            {/* استخدام dir="ltr" لعرض الأيقونات بشكل صحيح من اليسار لليمين */}
            <div className="flex space-x-3 space-x-reverse" dir="ltr"> 
                {socialLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#06D6A0] transition-colors"
                    >
                        {/* يفترض هنا أن الـ icon هو مسار صورة */}
                        <Image src={link.icon} alt={link.icon} width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    );
};

const TeamSection: React.FC<TeamSectionProps> = ({ content }) => {
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
                
                {/* شبكة أعضاء الفريق (4 أعضاء في الصف) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.members.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamSection;