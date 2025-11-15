// app/components/layout/Footer.tsx
// TODO: The lucide-react import causes a module error during linting or build.
// Please ensure 'lucide-react' is installed: run 'npm install lucide-react' or 'yarn add lucide-react'.
// If you do not intend to use these icons or want to prevent build errors, comment out or remove this import line as appropriate.
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: 'الشركة',
      links: [
        { href: '/about-us', label: 'من نحن' },
        { href: '/why-medyour', label: 'لماذا ميديور' },
        { href: '/challenges', label: 'التحديات' },
        { href: '/contact', label: 'اتصل بنا' }
      ]
    },
    services: {
      title: 'الخدمات',
      links: [
        { href: '/services', label: 'خدماتنا' },
        { href: '/services#telemedicine', label: 'الاستشارات عن بُعد' },
        { href: '/services#appointments', label: 'حجز المواعيد' },
        { href: '/services#records', label: 'السجلات الطبية' }
      ]
    },
    support: {
      title: 'الدعم',
      links: [
        { href: '/faqs', label: 'الأسئلة الشائعة' },
        { href: '/privacy', label: 'سياسة الخصوصية' },
        { href: '/terms', label: 'الشروط والأحكام' },
        { href: '/contact', label: 'المساعدة' }
      ]
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#001218] to-[#002D3A] text-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold font-cairo">ميديور</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              منصتك الموثوقة للحصول على أفضل رعاية صحية في الإمارات. نربطك بأفضل الأطباء والمراكز الطبية.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#00CFC5] hover:to-[#0099CC] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#00CFC5] hover:to-[#0099CC] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#00CFC5] hover:to-[#0099CC] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#00CFC5] hover:to-[#0099CC] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-xl font-bold font-cairo mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#00CFC5] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">العنوان</p>
                <p className="text-white">دبي، الإمارات العربية المتحدة</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">الهاتف</p>
                <a href="tel:800633968 7" className="text-white hover:text-[#00CFC5] transition-colors">
                  800-MEDYOUR
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                <a href="mailto:info@medyour.com" className="text-white hover:text-[#00CFC5] transition-colors">
                  info@medyour.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {currentYear} ميديور. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;