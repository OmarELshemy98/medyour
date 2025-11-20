(() => {
  const BG_CLASSES = [
    'bg-[url("/images/navbar-background.png")]',
    'bg-cover',
    'bg-center',
  ];
  const BG_STYLES = {
    backgroundImage: 'url("/images/navbar-background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const run = () => {
    setupNavbar();
    setupLangSwitch();
    highlightActiveLinks();
    initFloatingElements();
    initCarousel();
    initSmoothScroll();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  function setupNavbar() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const homeNav = document.getElementById('home-nav');
    const navbar = document.getElementById('navbar');

    const toggleMobileMenu = (forceOpen) => {
      if (!mobileMenu) return;
      const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : mobileMenu.classList.contains('hidden');
      if (shouldOpen) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    };

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => toggleMobileMenu());
    }

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
    }

    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => toggleMobileMenu(false));
      });
    }

    const addBackground = (element) => {
      if (!element) return;
      element.classList.remove('bg-transparent');
      BG_CLASSES.forEach((cls) => element.classList.add(cls));
      element.style.backgroundImage = BG_STYLES.backgroundImage;
      element.style.backgroundSize = BG_STYLES.backgroundSize;
      element.style.backgroundPosition = BG_STYLES.backgroundPosition;
    };

    const removeBackground = (element) => {
      if (!element) return;
      element.classList.add('bg-transparent');
      BG_CLASSES.forEach((cls) => element.classList.remove(cls));
      element.style.backgroundImage = '';
      element.style.backgroundSize = '';
      element.style.backgroundPosition = '';
    };

    if (homeNav) {
      addBackground(homeNav);
    }

    if (navbar) {
      const updateNavbar = () => {
        if (window.scrollY > 10) {
          addBackground(navbar);
        } else {
          removeBackground(navbar);
        }
      };
      updateNavbar();
      window.addEventListener('scroll', updateNavbar, { passive: true });
    }
  }

  function normalizePath(value) {
    try {
      const url = new URL(value, window.location.origin);
      let pathname = url.pathname.replace(/\/+$/, '');
      if (pathname === '' || pathname === '/') return 'index';
      const parts = pathname.split('/').filter(Boolean);
      if (parts[0] === 'ar' || parts[0] === 'en') {
        parts.shift();
      }
      if (parts.length === 0) return 'index';
      const last = parts[parts.length - 1];
      if (last === 'index' || last === 'index.html') {
        return 'index';
      }
      return parts.join('/');
    } catch (err) {
      return value;
    }
  }

  function setupLangSwitch() {
    try {
      const anchors = document.querySelectorAll('a[data-nav-ignore="true"]');
      if (!anchors || anchors.length === 0) return;
      const p = window.location.pathname || '/';
      let other = '';
      if (p.startsWith('/en')) {
        other = p.replace(/^\/en(?=\/|$)/, '/ar');
      } else if (p.startsWith('/ar')) {
        other = p.replace(/^\/ar(?=\/|$)/, '/en');
      } else {
        other = '/en' + (p === '/' ? '' : p);
      }
      anchors.forEach((a) => a.setAttribute('href', other));
    } catch (_) {}
  }

  function highlightActiveLinks() {
    const current = normalizePath(window.location.pathname);
    const selectors = [
      '#home-nav .hidden.lg\\:flex a[href]:not(.bg-white):not(.bg-\\[\\#001218\\])',
      '#navbar .hidden.lg\\:flex a[href]:not(.bg-white):not(.bg-\\[\\#001218\\])',
      '#mobile-menu .container a[href]:not(.bg-white):not(.border-2)',
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((link) => {
        if (link.hasAttribute('data-nav-ignore')) return;
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        const normalizedLink = normalizePath(href);
        if (normalizedLink === current) {
          link.classList.add('font-bold');
          link.classList.remove('font-light');
        } else {
          link.classList.remove('font-bold');
          link.classList.add('font-light');
        }
      });
    });
  }

  function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.animate-float, .animate-float-delay');
    floatingElements.forEach((element) => {
      element.setAttribute(
        'style',
        `animation: floatAndRotate 3s ease-in-out infinite${element.classList.contains('animate-float-delay') ? ' 0.5s' : ''};visibility:visible;`,
      );
    });

    if (!document.getElementById('float-animation')) {
      const style = document.createElement('style');
      style.id = 'float-animation';
      style.textContent =
        '@keyframes floatAndRotate{0%{transform:translateY(0) rotate(0deg);opacity:.8}50%{transform:translateY(-10px) rotate(180deg);opacity:1}100%{transform:translateY(0) rotate(360deg);opacity:.8}}';
      document.head.appendChild(style);
    }
  }

  function initCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button-prev');
    const nextBtn = document.querySelector('.carousel-button-next');

    if (!carouselContainer || carouselSlides.length === 0) return;

    let currentIndex = 0;
    let gap = 16;
    let slidesToShow = 1;
    let slideWidth = 0;

    const calculateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        slidesToShow = 3;
        gap = 24;
      } else if (width >= 768) {
        slidesToShow = 2;
        gap = 20;
      } else {
        slidesToShow = 1;
        gap = 16;
      }

      const maxPossibleIndex = Math.max(0, carouselSlides.length - slidesToShow);
      currentIndex = Math.min(currentIndex, maxPossibleIndex);
    };

    const updateCarousel = (withAnimation = true) => {
      if (!carouselContainer.parentElement) return;

      carouselContainer.style.transition = withAnimation ? 'transform 0.5s ease-in-out' : 'none';
      const wrapperWidth = carouselContainer.parentElement.clientWidth;
      const totalGapWidth = (slidesToShow - 1) * gap;
      slideWidth = (wrapperWidth - totalGapWidth) / slidesToShow;

      carouselSlides.forEach((slide, index) => {
        slide.style.width = `${slideWidth}px`;
        slide.style.marginRight = index < carouselSlides.length - 1 ? `${gap}px` : '0';
      });

      const translateValue = -currentIndex * (slideWidth + gap);
      carouselContainer.style.transform = `translateX(${translateValue}px)`;
    };

    const handleNext = () => {
      if (currentIndex >= carouselSlides.length - slidesToShow) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel();
    };

    const handlePrev = () => {
      if (currentIndex <= 0) {
        currentIndex = Math.max(0, carouselSlides.length - slidesToShow);
      } else {
        currentIndex--;
      }
      updateCarousel();
    };

    nextBtn?.addEventListener('click', handleNext);
    prevBtn?.addEventListener('click', handlePrev);

    let touchStartX = 0;
    let isTouchDragging = false;
    carouselContainer.addEventListener(
      'touchstart',
      (e) => {
        if (!e.touches.length) return;
        touchStartX = e.touches[0].clientX;
        isTouchDragging = true;
      },
      { passive: true },
    );

    carouselContainer.addEventListener(
      'touchend',
      (e) => {
        if (!isTouchDragging || !e.changedTouches.length) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) (diff > 0 ? handleNext : handlePrev)();
        isTouchDragging = false;
      },
      { passive: true },
    );

    let mouseStartX = 0;
    let isMouseDragging = false;
    carouselContainer.addEventListener('mousedown', (e) => {
      mouseStartX = e.clientX;
      isMouseDragging = true;
      carouselContainer.style.cursor = 'grabbing';
      carouselContainer.style.userSelect = 'none';
    });

    const stopMouseDrag = () => {
      if (!isMouseDragging) return;
      isMouseDragging = false;
      carouselContainer.style.cursor = 'grab';
      carouselContainer.style.userSelect = 'auto';
    };

    carouselContainer.addEventListener('mouseup', (e) => {
      if (!isMouseDragging) return;
      const diff = mouseStartX - e.clientX;
      if (Math.abs(diff) > 50) (diff > 0 ? handleNext : handlePrev)();
      stopMouseDrag();
    });

    carouselContainer.addEventListener('mouseleave', stopMouseDrag);
    carouselContainer.style.cursor = 'grab';

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        calculateSlidesToShow();
        updateCarousel(false);
      }, 250);
    });

    calculateSlidesToShow();
    updateCarousel(false);
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
})();