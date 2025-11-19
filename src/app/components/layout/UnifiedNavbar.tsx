import { getTranslations } from '../../../lib/locales';

type UnifiedNavbarProps = {
  lang: 'ar' | 'en';
  isHome?: boolean;
};

const backgroundClass = "bg-[url('/images/navbar-background.png')] bg-cover bg-center";
const baseClass = "fixed top-0 z-50 w-full text-white transition-all duration-500 ease-in-out";

export default function UnifiedNavbar({ lang, isHome = false }: UnifiedNavbarProps) {
  const t = getTranslations(lang);
  const basePath = lang === 'en' ? '/en' : '/ar';
  const otherLangHref = lang === 'en' ? '/ar' : '/en';
  const otherLangLabel = lang === 'en' ? 'العربية' : 'EN';
  const mode = isHome ? 'hero' : 'static';
  const navId = isHome ? 'home-nav' : 'navbar';
  const navClass = mode === 'hero' ? `${baseClass} ${backgroundClass}` : `${baseClass} bg-transparent`;

  const sectionLinks = [
    { slug: '/about-us', label: t.nav.aboutUs },
    { slug: '/services', label: t.nav.services },
    { slug: '/challenges', label: t.nav.challenges },
    { slug: '/why-medyour', label: t.nav.whyMedyour },
    { slug: '/faqs', label: t.nav.faqs },
  ];

  const linkHref = (slug: string) => {
    if (slug === '/') return basePath;
    return `${basePath}${slug}`;
  };

  if (lang === 'ar') {
    return (
      <nav id={navId} data-mode={mode} className={navClass} dir="rtl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <input id="menu-toggle-ar" type="checkbox" className="hidden peer" />
          <div className="flex items-center justify-between w-full lg:hidden">
            <label htmlFor="menu-toggle-ar" className="text-white focus:outline-none text-2xl cursor-pointer">☰</label>
            <a href={basePath} className="flex items-center justify-center">
              <img src="/images/logo-medyour-ar.png" alt="Logo" className="w-[150px] sm:w-[170px] md:w-[200px]" />
            </a>
            <div className="w-8" />
          </div>

          <div
            id="mobile-menu-ar"
            className="hidden peer-checked:block lg:hidden bg-[#001218] text-white p-6 sm:p-8 space-y-4 sm:space-y-6 fixed top-0 left-0 w-full h-full z-[60] overflow-y-auto"
          >
            <label htmlFor="menu-toggle-ar" className="absolute top-4 left-4 text-white text-3xl cursor-pointer">
              &times;
            </label>
            <div className="container mx-auto pt-16 space-y-8 sm:space-y-12">
              {sectionLinks.map((link) => (
                <a
                  key={link.slug}
                  href={linkHref(link.slug)}
                  className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-full sm:w-3/5 space-y-4 sm:space-y-6 mx-auto">
                <a href={linkHref('/contact')} className="block bg-white text-[#005071] text-lg sm:text-xl px-6 py-3 rounded-full text-center">
                  {t.nav.contact}
                </a>
                <a href={otherLangHref} className="block text-white text-lg sm:text-xl px-6 py-3 rounded-full text-center">
                  EN
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex flex-1 items-center gap-24 justify-between mx-auto max-w-7xl">
              <div className="flex flex-1 pt-9 justify-between">
                <a href={basePath}>
                  <img src="/images/logo-medyour-ar.png" alt="Logo" className="w-[170px] xl:w-[180px] mt-[-5px]" />
                </a>
                {sectionLinks.map((link) => (
                  <a
                    key={link.slug}
                    href={linkHref(link.slug)}
                    className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-end justify-center space-y-2">
                <a
                  href={otherLangHref}
                  className="text-white text-base font-normal leading-6 rounded hover:bg-gray-800 transition-colors text-center"
                >
                  EN
                </a>
                <a
                  href={linkHref('/contact')}
                  className="bg-white text-[#005071] text-base font-normal leading-6 px-5 py-1 rounded hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
                >
                  {t.nav.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav id={navId} data-mode={mode} className={navClass}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <input id="menu-toggle-en" type="checkbox" className="hidden peer" />
        <div className="flex items-center justify-between w-full lg:hidden">
          <label htmlFor="menu-toggle-en" className="text-white focus:outline-none text-2xl cursor-pointer">☰</label>
          <a href={basePath} className="flex items-center justify-center">
            <img src="/images/logo-medyour.png" alt="Logo" className="w-[150px] sm:w-[170px] md:w-[200px]" />
          </a>
          <div className="w-8" />
        </div>

        <div
          id="mobile-menu-en"
          className="hidden peer-checked:block lg:hidden bg-[#001218] text-white p-6 sm:p-8 space-y-4 sm:space-y-6 fixed top-0 left-0 w-full h-full z-[60] overflow-y-auto"
        >
          <label htmlFor="menu-toggle-en" className="absolute top-4 left-4 text-white text-3xl cursor-pointer">
            &times;
          </label>
          <div className="container mx-auto pt-16 space-y-8 sm:space-y-12">
            {sectionLinks.map((link) => (
              <a
                key={link.slug}
                href={linkHref(link.slug)}
                className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center"
              >
                {link.label}
              </a>
            ))}
            <div className="w-full sm:w-3/5 space-y-4 sm:space-y-6 mx-auto">
              <a href={linkHref('/contact')} className="block bg-white text-[#005071] text-lg sm:text-xl px-6 py-3 rounded-full text-center">
                {t.nav.contact}
              </a>
              <a href={otherLangHref} className="block text-white text-lg sm:text-xl px-6 py-3 rounded-full text-center">
                العربية
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex flex-1 items-center gap-24 justify-between mx-auto max-w-7xl">
            <div className="flex flex-1 pt-9 justify-between">
              <a href={basePath}>
                <img src="/images/logo-medyour.png" alt="Logo" className="w-[170px] xl:w-[180px] mt-[-5px]" />
              </a>
              {sectionLinks.map((link) => (
                <a
                  key={link.slug}
                  href={linkHref(link.slug)}
                  className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-end justify-center space-y-2">
              <a
                href={otherLangHref}
                className="text-white text-base font-normal leading-6 rounded hover:bg-gray-800 transition-colors text-center"
              >
                العربية
              </a>
              <a
                href={linkHref('/contact')}
                className="bg-white text-[#005071] text-base font-normal leading-6 px-5 py-1 rounded hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
