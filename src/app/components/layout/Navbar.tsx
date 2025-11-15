// app/components/layout/Navbar.tsx
import { Menu, X, ChevronDown } from 'lucide-react';

type NavbarProps = {
  isHome?: boolean;
};

const Navbar = ({ isHome = false }: NavbarProps) => {
  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about-us', label: 'من نحن' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/why-medyour', label: 'لماذا ميديور' },
    { href: '/challenges', label: 'التحديات' },
    { href: '/faqs', label: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'اتصل بنا' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isHome ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-md'
      } transition-all duration-300`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className={`text-2xl font-bold font-cairo ${isHome ? 'text-[#001218]' : 'text-[#001218]'}`}>
              ميديور
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors hover:text-[#00CFC5] ${
                  isHome ? 'text-[#001218]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-2 px-6 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              احجز الآن
            </a>
            
            {/* Language Switcher */}
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#00CFC5] transition-colors">
              <span className="font-semibold">EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-700 hover:text-[#00CFC5] transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default - would need JavaScript to toggle) */}
      <div className="hidden lg:hidden bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 px-4 text-gray-700 hover:bg-[#F8F9FA] hover:text-[#00CFC5] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="block text-center bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-6 rounded-full hover:shadow-xl transition-all duration-300"
          >
            احجز الآن
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;