export default function HtmlNavbarEn({ mode = 'hero', home = false }: { mode?: 'hero' | 'static'; home?: boolean }) {
  const base = "fixed top-0 z-50 w-full text-white transition-all duration-500 ease-in-out";
  const bg = "bg-[url('/images/navbar-background.png')] bg-cover bg-center";
  const cls = mode === 'static' ? `${base} ${bg}` : `${base} bg-transparent`;
  return (
    <nav
      id={home ? "home-nav" : "navbar"}
      data-mode={mode}
      className={cls}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <input id="menu-toggle" type="checkbox" className="hidden peer" />
        <div className="flex items-center justify-between w-full lg:hidden">
          <label htmlFor="menu-toggle" className="text-white focus:outline-none text-2xl cursor-pointer">☰</label>
          <a href="/en" className="flex items-center justify-center">
            <img
              src="/images/logo-medyour.png"
              alt="Logo"
              className="w-[150px] sm:w-[170px] md:w-[200px]"
            />
          </a>
          <div className="w-8" />
        </div>

        <div
          id="mobile-menu"
          className="hidden peer-checked:block lg:hidden bg-[#001218] text-white p-6 sm:p-8 space-y-4 sm:space-y-6 fixed top-0 left-0 w-full h-full z-[60] overflow-y-auto"
        >
          <label htmlFor="menu-toggle" className="absolute top-4 left-4 text-white text-3xl cursor-pointer">&times;</label>
          <div className="container mx-auto pt-16 space-y-8 sm:space-y-12">
            <a href="/en/about-us" className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center">About Us</a>
            <a href="/en/services" className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center">Services</a>
            <a href="/en/challenges" className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center">Healthcare Challenges</a>
            <a href="/en/why-medyour" className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center">Why Medyour?</a>
            <a href="/en/faqs" className="block text-lg font-light leading-6 text-white hover:text-gray-200 text-center">FAQs</a>
            <div className="w-full sm:w-3/5 space-y-4 sm:space-y-6 mx-auto">
              <a href="/en/contact" className="block bg-white text-[#005071] text-lg sm:text-xl px-6 py-3 rounded-full text-center">Contact Us</a>
              <a href="/" className="block text-white text-lg sm:text-xl px-6 py-3 rounded-full text-center">عربي</a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex flex-1 items-center gap-24 justify-between mx-auto max-w-7xl ">
            <div className="flex flex-1 pt-9 justify-between">
              <a href="/en">
                <img
                  src="/images/logo-medyour.png"
                  alt="Logo"
                  className="w-[170px] xl:w-[180px] mt-[-5px]"
                />
              </a>
              <a href="/en/about-us" className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors">About Us</a>
              <a href="/en/services" className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors">Services</a>
              <a href="/en/challenges" className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors">Healthcare Challenges</a>
              <a href="/en/why-medyour" className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors">Why MedYour?</a>
              <a href="/en/faqs" className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors">FAQs</a>
            </div>
            <div className="flex flex-col items-end justify-center  space-y-2">
              <a href="/" className="text-white text-base font-normal leading-6 rounded hover:bg-gray-800 transition-colors text-center">عربي</a>
              <a href="/en/contact" className="bg-white text-[#005071] text-base font-normal leading-6 px-5 py-1 rounded hover:bg-gray-100 transition-colors text-center whitespace-nowrap">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}