export default function HtmlFooterEn() {
  return (
    <footer className="bg-[#003439] text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            <a href="/en/about-us" className="text-white text-[15px] font-light leading-6">About Us</a>
            <a href="/en/services" className="text-white text-[15px] font-light leading-6">Services</a>
            <a href="/en/faqs" className="text-white text-[15px] font-light leading-6">FAQs</a>
            <a href="/en/contact" className="text-white text-[15px] font-light leading-6">Contact Us</a>
          </div>
          <div className="text-sm">
            (c) Copyrights 2025, all rights reserved.
            <a href="/en/terms" className="hover:text-gray-300 ml-1 underline">Terms & Conditions</a>
            <span className="mx-1">|</span>
            <a href="/en/privacy" className="hover:text-gray-300 underline">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:hidden">
          <p className="text-sm text-center">(c) Copyrights 2025, all rights reserved.</p>
          <div className="text-sm flex items-center gap-2">
            <a href="/en/terms" className="hover:text-gray-300 underline">Terms & Conditions</a>
            <span>|</span>
            <a href="/en/privacy" className="hover:text-gray-300 underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}