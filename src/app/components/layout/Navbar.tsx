// Navbar.tsx
import { Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

type NavbarProps = {
  isHome?: boolean; // سنترك الـ prop لكننا لن نستخدمه لتغيير الـ style
  lang?: 'ar' | 'en';
};

const Navbar = ({ isHome = false, lang = 'ar' }: NavbarProps) => {
  const base = lang === 'en' ? '/en' : '';
  const navLinks = lang === 'en'
    ? [
        { href: `${base}/`, label: 'Home' },
        { href: `${base}/about-us`, label: 'About Us' },
        { href: `${base}/services`, label: 'Services' },
        { href: `${base}/why-medyour`, label: 'Why Medyour' },
        { href: `${base}/challenges`, label: 'Challenges' },
        { href: `${base}/faqs`, label: 'FAQs' },
        { href: `${base}/contact`, label: 'Contact' },
      ]
    : [
        { href: `${base}/`, label: 'الرئيسية' },
        { href: `${base}/about-us`, label: 'من نحن' },
        { href: `${base}/services`, label: 'خدماتنا' },
        { href: `${base}/why-medyour`, label: 'لماذا ميديور' },
        { href: `${base}/challenges`, label: 'التحديات' },
        { href: `${base}/faqs`, label: 'الأسئلة الشائعة' },
        { href: `${base}/contact`, label: 'اتصل بنا' },
      ];

  return (
    <nav
      id="main-navbar" // هذا الـ ID مهم جداً لملف الـ JS
      // التغيير هنا: ألغينا كل الـ logic الخاص بـ isHome
      // سيبدأ دائماً شفافاً
      className="fixed top-0 left-0 right-0 z-50 bg-[url('/images/navbar-background.png')] bg-cover bg-center text-white transition-all duration-300"
      dir={lang === 'en' ? 'ltr' : 'rtl'}
      style={{}} // ألغينا الـ style prop logic أيضاً
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href={base || '/'}
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            {/* التغيير هنا: تأكد أن النص يظهر (كان يعتمد على isHome) */}
            <span className="text-2xl font-bold font-cairo text-[#001218]">
              {lang === 'en' ? 'Medyour' : 'ميديور'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                 // التغيير هنا: تأكد أن النص يظهر (كان يعتمد على isHome)
                className="font-semibold transition-colors hover:text-[#00CFC5] text-gray-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`${base}/contact`}
              className="bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-2 px-6 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {lang === 'en' ? 'Book Now' : 'احجز الآن'}
            </a>
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-700 hover:text-[#00CFC5] transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;