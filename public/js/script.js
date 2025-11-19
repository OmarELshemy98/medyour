(() => {
  const BG_CLASSES = [
    'bg-[url("/images/navbar-background.png")]',
    'bg-cover',
    'bg-center',
  ];

  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenuClosing();
    initFloatingElements();
    initCarousel();
    initSmoothScroll();
  });

  function initNavbar() {
    const navbar = document.getElementById('home-nav') || document.getElementById('navbar');
    if (!navbar) return;

    const mode = navbar.dataset.mode || 'static';
    const addBackground = () => {
      navbar.classList.remove('bg-transparent');
      BG_CLASSES.forEach((cls) => navbar.classList.add(cls));
    };
    const removeBackground = () => {
      if (mode === 'hero') return;
      navbar.classList.add('bg-transparent');
      BG_CLASSES.forEach((cls) => navbar.classList.remove(cls));
    };

    if (mode === 'hero') {
      addBackground();
      return;
    }

    const hasHero = !!document.querySelector('header');
    if (!hasHero) {
      addBackground();
      return;
    }

    const onScroll = () => {
      if (window.scrollY > 10) {
        addBackground();
      } else {
        removeBackground();
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
  }

  function initMobileMenuClosing() {
    const toggles = [
      { toggleId: 'menu-toggle-ar', menuId: 'mobile-menu-ar' },
      { toggleId: 'menu-toggle-en', menuId: 'mobile-menu-en' },
    ];

    toggles.forEach(({ toggleId, menuId }) => {
      const toggle = document.getElementById(toggleId);
      const menu = document.getElementById(menuId);
      if (!toggle || !menu) return;

      menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          toggle.checked = false;
          toggle.dispatchEvent(new Event('change'));
        });
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