// components/layout/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NavLink } from '../../types/common'; // افتراض أن المسار هو types/common
// استدعاء محتوى الروابط من الملف العالمي العربي
import { navigationLinks, actionLink } from '../../content/ar/global'; 

// يجب أن يتم وضع هذه المكونات في مجلد assets/icons أو assets/images 
// بناءً على هيكل ملفاتك، سنستخدم مسارات افتراضية الآن.
const Logo = '/images/logo.svg'; 
const MenuIcon = '/images/icons/menu.svg'; 
const CloseIcon = '/images/icons/close.svg'; 

interface NavbarProps {
    // تحديد ما إذا كانت الصفحة الرئيسية (لها تصميم Navbar مختلف قليلاً)
    isHome?: boolean;
}

// سنستخدم هذا المكون كـ Layout أساسي (لجميع الصفحات غير الرئيسية)
const Navbar: React.FC<NavbarProps> = ({ isHome = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // لتبسيط العرض، سنستخدم الروابط العربية كافتراض
    const navLinks: NavLink[] = navigationLinks;
    const actionLinkObj = actionLink;

    // التصميم الأساسي للـ Navbar (الخلفية الداكنة) المأخوذ من about-us.html
    const navClasses = `fixed top-0 w-full z-50 ${isHome ? 'bg-transparent' : 'bg-[#001218] shadow-lg'}`;
    const linkClasses = "text-white text-[1rem] font-light hover:text-[#06D6A0] transition-colors p-2";
    const activeLinkClasses = "font-bold border-b-2 border-[#06D6A0] text-[#06D6A0]";
    // يفترض هنا أن الصفحة الحالية هي 'home' (فقط كمثال)
    const activePath = '/'; 

    return (
        <nav className={navClasses} dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src={Logo} alt="Medyour Logo" width={120} height={30} priority />
                </Link>

                {/* Desktop Links and Action Button */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className={`${linkClasses} ${link.href === activePath ? activeLinkClasses : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link 
                        href={actionLink.href} 
                        className="bg-[#06D6A0] text-[#001218] text-center text-sm font-bold py-2 px-4 rounded-full hover:bg-[#04C791] transition-colors"
                    >
                        {actionLink.label}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    id="menu-toggle" 
                    className="md:hidden p-2 text-white" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <Image 
                        src={isMenuOpen ? CloseIcon : MenuIcon} 
                        alt="Menu" 
                        width={24} 
                        height={24} 
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                id="mobile-menu" 
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#001218] absolute w-full top-full shadow-xl`}
            >
                <div className="flex flex-col items-stretch p-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className={`${linkClasses} block text-center py-3 px-4 rounded-lg hover:bg-[#102430] ${link.href === activePath ? 'font-bold text-[#06D6A0]' : 'font-light'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link 
                        href={actionLink.href} 
                        className="bg-[#06D6A0] text-[#001218] text-center text-base font-bold py-3 px-4 rounded-full mt-4 hover:bg-[#04C791] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {actionLink.label}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;