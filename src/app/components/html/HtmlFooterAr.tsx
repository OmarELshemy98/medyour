export default function HtmlFooterAr() {
  return (
    <footer className="bg-[#003439] text-white py-4" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <a href="/about-us" className="text-white text-[15px] font-light leading-6">من نحن</a>
            <a href="/services" className="text-white text-[15px] font-light leading-6">خدماتنا</a>
            <a href="/faqs" className="text-white text-[15px] font-light leading-6">الأسئلة الشائعة</a>
            <a href="/contact" className="text-white text-[15px] font-light leading-6">اتصل بنا</a>
          </div>
          <div className="text-sm">
            © 2025 جميع الحقوق محفوظة
            <a href="/terms" className="hover:text-gray-300 ml-1 underline">الشروط والأحكام</a>
            <span className="mx-1">|</span>
            <a href="/privacy" className="hover:text-gray-300 underline">سياسة الخصوصية</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:hidden">
          <p className="text-sm text-center">© 2025 جميع الحقوق محفوظة</p>
          <div className="text-sm flex items-center gap-2">
            <a href="/terms" className="hover:text-gray-300 underline">الشروط والأحكام</a>
            <span>|</span>
            <a href="/privacy" className="hover:text-gray-300 underline">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}