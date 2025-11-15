import React from 'react';

// تحديد نوع محتوى الاتصال
interface ContactDetail {
    icon: 'mail' | 'phone' | 'mapPin'; // أسماء الأيقونات الداخلية
    title: string;
    value: string;
    link?: string;
}

interface ContactInfoContent {
    title: string;
    subtitle: string;
    details: ContactDetail[];
}

interface ContactInfoSectionProps {
    content: ContactInfoContent;
}

// مكون الأيقونة الداخلية (Inline SVG)
// تم استبدال lucide-react بأيقونات SVG مضمنة لضمان عدم وجود أخطاء "module not found".
const ContactIcon: React.FC<{ name: 'mail' | 'phone' | 'mapPin', className: string }> = ({ name, className }) => {
    switch (name) {
        case 'mail':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
                </svg>
            );
        case 'phone':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            );
        case 'mapPin':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
            );
        default:
            return null;
    }
};

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ content }) => {
    return (
        <div className="p-8 bg-[#F8F9FA] rounded-xl shadow-lg h-full">
            <h2 className="text-2xl font-extrabold text-[#001218] font-cairo mb-3">
                {content.title}
            </h2>
            <p className="text-gray-600 mb-8">
                {content.subtitle}
            </p>

            <div className="space-y-6">
                {content.details.map((detail, index) => {
                    const Wrapper = detail.link ? 'a' : 'div';
                    const linkProps = detail.link ? { href: detail.link, target: "_blank", rel: "noopener noreferrer" } : {};

                    return (
                        <Wrapper 
                            key={index} 
                            className="flex items-start space-x-4 space-x-reverse group hover:text-[#06D6A0] transition-colors cursor-pointer"
                            {...linkProps}
                        >
                            <div className="shrink-0 p-3 bg-white rounded-full border border-gray-200 group-hover:bg-[#06D6A0] group-hover:text-white transition-all">
                                {/* استخدام الأيقونة الداخلية */}
                                <ContactIcon name={detail.icon} className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#001218] group-hover:text-[#06D6A0] transition-colors font-cairo">
                                    {detail.title}
                                </h4>
                                <p className="text-gray-600 group-hover:text-[#001218] transition-colors">
                                    {detail.value}
                                </p>
                            </div>
                        </Wrapper>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactInfoSection;