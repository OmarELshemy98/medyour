"use client";
import { getTranslations } from '../../../lib/locales';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type UnifiedNavbarProps = {
  lang: 'ar' | 'en';
  isHome?: boolean;
};

const backgroundClass = "bg-[url('/images/navbar-background.png')] bg-cover bg-center";
const baseClass = 'fixed top-0 z-50 w-full text-white transition-all duration-500 ease-in-out';

type NavLink = { slug: string; label: string };

export default function UnifiedNavbar({ lang, isHome = false }: UnifiedNavbarProps) {
  const t = getTranslations(lang);
  const basePath = lang === 'en' ? '/en' : '/ar';
  const pathname = usePathname();
  const otherLangHref = (() => {
    if (!pathname) return lang === 'en' ? '/ar' : '/en';
    if (pathname.startsWith('/en')) return pathname.replace(/^\/en/, '/ar');
    if (pathname.startsWith('/ar')) return pathname.replace(/^\/ar/, '/en');
    return lang === 'en' ? '/ar' : '/en';
  })();
  const otherLangLabel = lang === 'en' ? 'عربي' : 'English';
  const navLinks: NavLink[] = [
    { slug: '/about-us', label: t.nav.aboutUs },
    { slug: '/services', label: t.nav.services },
    { slug: '/challenges', label: t.nav.challenges },
    { slug: '/why-medyour', label: t.nav.whyMedyour },
    { slug: '/faqs', label: t.nav.faqs },
  ];

  const navId = isHome ? 'home-nav' : 'navbar';
  const navClass = `${baseClass} ${isHome ? backgroundClass : 'bg-transparent'}`;

  if (lang === 'ar') {
    return (
      <nav id={navId} className={navClass} dir="rtl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center justify-between w-full lg:hidden">
            <button id="menu-toggle" type="button" className="text-white focus:outline-none text-2xl">
              ☰
            </button>
            <a href={basePath} className="flex items-center justify-center">
              <Image
                src="/images/logo-medyour-ar.png"
                alt="مديور"
                width={200}
                height={60}
                className="w-[150px] sm:w-[170px] md:w-[200px] h-auto"
                priority={isHome}
              />
            </a>
            <div className="w-8" />
          </div>

          <div
            id="mobile-menu"
            className="hidden lg:hidden bg-[#001218] text-white p-6 sm:p-8 space-y-4 sm:space-y-6 fixed top-0 right-0 w-full h-full z-[60] overflow-y-auto"
          >
            <button id="close-menu" type="button" className="absolute top-4 left-4 text-white text-3xl">
              &times;
            </button>
            <div className="container mx-auto pt-16 space-y-8 sm:space-y-12">
              {navLinks.map((link) => (
                <a
                  key={link.slug}
                  href={`${basePath}${link.slug}`}
                  className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-full sm:w-3/5 space-y-4 sm:space-y-6 mx-auto">
                <a
                  href={`${basePath}/contact`}
                  className="block bg-white text-[#005071] text-lg sm:text-xl px-6 py-3 rounded-full text-center"
                >
                  {t.nav.contact}
                </a>
                <a
                  href={otherLangHref}
                  data-nav-ignore="true"
                  className="block text-white text-lg sm:text-xl px-6 py-3 rounded-full text-center"
                >
                  {otherLangLabel}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between w-full"dir="rtl">
            <div className="flex flex-1 items-center justify-between mx-auto max-w-7xl pb-4 gap-24 flex-row">
              <div className="flex flex-1 pt-8 justify-between">
                <a href={basePath}>
                  <Image
                    src="/images/logo-medyour-ar.png"
                    alt="مديور"
                    width={190}
                    height={64}
                    className="w-[170px] xl:w-[190px] h-auto"
                    priority={isHome}
                  />
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.slug}
                    href={`${basePath}${link.slug}`}
                    className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-end gap-2 justify-center">
                <a
                  href={otherLangHref}
                  data-nav-ignore="true"
                  className="text-white text-base font-normal leading-6 rounded hover:bg-gray-800 transition-colors text-center"
                >
                  {otherLangLabel}
                </a>
                <a
                  href={`${basePath}/contact`}
                  className="bg-white text-[#005071] text-base font-normal leading-6 px-5 py-1 rounded hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav id={navId} className={navClass}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center justify-between w-full lg:hidden">
          <button id="menu-toggle" type="button" className="text-white focus:outline-none text-2xl">
            ☰
          </button>
          <a href={basePath} className="flex items-center justify-center">
            <Image
              src="/images/logo-medyour.png"
              alt="Medyour"
              width={200}
              height={60}
              className="w-[150px] sm:w-[170px] md:w-[200px] h-auto"
              priority={isHome}
            />
          </a>
          <div className="w-8" />
        </div>

        <div
          id="mobile-menu"
          className="hidden lg:hidden bg-[#001218] text-white p-6 sm:p-8 space-y-4 sm:space-y-6 fixed top-0 left-0 w-full h-full z-[60] overflow-y-auto"
        >
          <button id="close-menu" type="button" className="absolute top-4 left-4 text-white text-3xl">
            &times;
          </button>
          <div className="container mx-auto pt-16 space-y-8 sm:space-y-12">
            {navLinks.map((link) => (
              <a
                key={link.slug}
                href={`${basePath}${link.slug}`}
                className="block text-lg font-light leading-6 text-white hover:text-gray-200 hover:font-bold transition-all text-center"
              >
                {link.label}
              </a>
            ))}
            <div className="w-full sm:w-3/5 space-y-4 sm:space-y-6 mx-auto">
              <a
                href={`${basePath}/contact`}
                className="block bg-white text-[#005071] text-lg sm:text-xl px-6 py-3 rounded-full text-center"
              >
                {t.nav.contact}
              </a>
              <a
                href={otherLangHref}
                data-nav-ignore="true"
                className="block text-white text-lg sm:text-xl px-6 py-3 rounded-full text-center"
              >
                {otherLangLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="hidden  lg:flex items-center justify-between w-full" dir="ltr">
          <div className="flex flex-1  items-center gap-24 justify-between mx-auto max-w-7xl pb-4 ">
            <div className="flex flex-1 pt-9 justify-between">
              <a href={basePath}>
                <Image
                  src="/images/logo-medyour.png"
                  alt="Medyour"
                  width={180}
                  height={60}
                  className="w-[170px] xl:w-[180px] mt-[-5px] h-auto"
                  priority={isHome}
                />
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.slug}
                  href={`${basePath}${link.slug}`}
                  className="text-[1.125rem] font-normal leading-[1.5rem] text-white hover:text-gray-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-end justify-center space-y-2">
              <a
                href={otherLangHref}
                data-nav-ignore="true"
                className="text-white text-base font-normal leading-6 rounded hover:bg-gray-800 transition-colors text-center"
              >
                {otherLangLabel}
              </a>
              <a
                href={`${basePath}/contact`}
                className="bg-white text-[#005071] text-base font-normal leading-6 px-5 py-1 rounded hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
