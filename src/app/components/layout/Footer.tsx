// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from '../../types/common'; // استدعاء الأنواع
// استدعاء محتوى الروابط وحقوق النشر من الملف العالمي العربي
import { 
    navigationLinks as navigationLinksAr, 
    legalLinks as legalLinksAr
} from '../../content/ar/global';

const footerTextAr = { copyright: "© جميع الحقوق محفوظة لميديور 2024" };

const Logo = '/images/logo-light.svg'; // نفترض وجود نسخة بيضاء من الشعار

// بيانات التواصل الاجتماعي الافتراضية
const socialLinks = [
    { icon: '/images/icons/facebook.svg', href: 'https://facebook.com/medyour' },
    { icon: '/images/icons/twitter.svg', href: 'https://twitter.com/medyour' },
    { icon: '/images/icons/linkedin.svg', href: 'https://linkedin.com/company/medyour' },
    { icon: '/images/icons/instagram.svg', href: 'https://instagram.com/medyour' },
];

const Footer: React.FC = () => {
    // نصوص الروابط العربية
    const navLinks: NavLink[] = navigationLinksAr;
    const legalLinks: NavLink[] = legalLinksAr;
    const { copyright } = footerTextAr;

    return (
        <footer className="bg-[#001218] text-white pt-16 pb-8 border-t border-[#102430]" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* القسم العلوي - الشعار والروابط */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-[#102430]">
                    
                    {/* الشعار وروابط التواصل */}
                    <div className="flex flex-col items-start md:items-start mb-8 md:mb-0">
                        <Link href="/">
                            <Image src={Logo} alt="Medyour Logo" width={140} height={35} />
                        </Link>
                        
                        <p className="text-gray-400 text-sm mt-4 max-w-sm">
                            حلول رعاية صحية ذكية وشاملة للأفراد والشركات، لضمان مستقبل صحي أفضل.
                        </p>

                        {/* أيقونات التواصل الاجتماعي */}
                        <div className="flex space-x-4 mt-6" dir="ltr">
                            {socialLinks.map((link) => (
                                <a 
                                    key={link.href}
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#06D6A0] transition-colors"
                                >
                                    {/* سنستخدم أيقونة افتراضية أو نعتمد على Font Awesome/SVGs */}
                                    <Image src={link.icon} alt={link.href} width={24} height={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* روابط التنقل */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16 text-right">
                        
                        {/* قائمة الروابط الرئيسية */}
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-lg font-bold text-white mb-2">روابط سريعة</h3>
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.href} 
                                    href={link.href} 
                                    className="text-gray-400 text-sm hover:text-[#06D6A0] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* قسم آخر اختياري (مثال: الدعم) */}
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-lg font-bold text-white mb-2">الدعم</h3>
                            <Link 
                                href="/contact" 
                                className="text-gray-400 text-sm hover:text-[#06D6A0] transition-colors"
                            >
                                تواصل معنا
                            </Link>
                            <Link 
                                href="/faqs" 
                                className="text-gray-400 text-sm hover:text-[#06D6A0] transition-colors"
                            >
                                مساعدة وأسئلة شائعة
                            </Link>
                        </div>
                    </div>
                </div>

                {/* القسم السفلي - حقوق النشر والروابط القانونية */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    {/* حقوق النشر */}
                    <p className="mb-4 md:mb-0">
                        {copyright}
                    </p>

                    {/* الروابط القانونية */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                        {legalLinks.map((link, index) => (
                            <div key={link.href} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className="hover:text-[#06D6A0] underline"
                                >
                                    {link.label}
                                </Link>
                                {/* فاصل بين الروابط */}
                                {index < legalLinks.length - 1 && <span className="mx-2">|</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;