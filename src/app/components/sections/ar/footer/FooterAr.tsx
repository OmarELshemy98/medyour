export default function FooterAr() {
  return (
    <footer className="bg-[#003439] text-white py-6" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a
              href="/ar/about-us"
              className="text-[#FFF] text-right  text-[1rem] font-normal leading-[1.5rem] ml-6"
            >
              من نحن
            </a>
            <a
              href="/ar/services"
              className="text-[#FFF] text-right  text-[1rem] font-normal leading-[1.5rem]"
            >
              خدماتنا
            </a>
            <a
              href="/ar/faqs"
              className="text-[#FFF] text-right text-[1rem] font-normal leading-[1.5rem]"
            >
              الأسئلة الشائعة
            </a>
            <a
              href="/ar/contact"
              className="text-[#FFF] text-right text-[1rem] font-normal leading-[1.5rem]"
            >
              تواصل معنا
            </a>
          </div>

          {/* Copyright for Desktop */}
          <div className="text-sm">
            جميع الحقوق محفوظة © ٢٠٢٥.
            <a
              href="/ar/terms"
              className="hover:text-gray-300 ml-1 underline"
            >
              الشروط والأحكام
            </a>
            <span className="mx-1">|</span>
            <a
              href="/ar/privacy"
              className="hover:text-gray-300 underline"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center md:hidden">
          <p className="text-sm text-center">جميع الحقوق محفوظة © 2025</p>
          <div className="text-sm flex items-center gap-2">
            <a
              href="/ar/terms"
              className="hover:text-gray-300 underline"
            >
              الشروط والأحكام
            </a>
            <span>|</span>
            <a
              href="/ar/privacy"
              className="hover:text-gray-300 underline"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
