document.addEventListener('DOMContentLoaded', () => {

  // ------------------- [NAVBAR SECTION] -------------------
  // Toggle for mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  // Navbar background change on scroll
  const navbar = document.getElementById('navbar');
  const updateNavbar = () => {
    if (!navbar) return;
    if (window.scrollY > 10) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-[url("/images/navbar-background.png")]', 'bg-cover', 'bg-center');
    } else {
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-[url("/images/navbar-background.png")]', 'bg-cover', 'bg-center');
    }
  };
  window.addEventListener('scroll', updateNavbar);

  // Detect active navigation link and highlight (desktop/mobile)
  const currentPath = window.location.pathname.split('/').pop();
  const pageName = currentPath === '' ? 'index.html' : currentPath;

  // Helper: Better detection if it's home page
  const isHomePage = () => {
    const path = window.location.pathname;
    return path === '/' ||
      path.endsWith('/index.html') ||
      path === '/en' ||
      path === '/en/' ||
      path.endsWith('/en/index.html');
  };

  // Helper: Detect if carousel exists
  const hasCarousel = document.querySelector('.carousel-container') !== null;

  // Set nav links highlight active (with hover for home)
  if (isHomePage() || hasCarousel) {
    // -- HOME NAVBAR أهداف التنقل للقائمة في الصفحة الرئيسية --
    const desktopNavLinks = document.querySelectorAll('#home-nav .hidden.md\\:flex a[href]:not(.bg-white):not(.bg-\\[\\#001218\\])');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .container a[href]:not(.bg-white):not(.border-2)');

    const setActiveLinkHome = (links) => {
      links.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref === '/' ? '' : linkHref.split('/').pop();
        const linkPageName = linkPath === '' ? 'index.html' : linkPath;
        link.classList.remove('font-bold');
        link.classList.add('font-light', 'hover:font-bold');
        if (linkPageName === pageName || (pageName === '' && linkPageName === 'index.html')) {
          link.classList.remove('font-light', 'hover:font-bold');
          link.classList.add('font-bold');
        }
      });
    };
    setActiveLinkHome(desktopNavLinks);
    setActiveLinkHome(mobileNavLinks);
  } else {
    // -- باقي الصفحات (كل الصفحات غير الرئيسية) --
    const desktopNavLinks = document.querySelectorAll('#navbar .hidden.md\\:flex a[href]:not(.bg-white):not(.bg-\\[\\#001218\\])');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .container a[href]:not(.bg-white):not(.border-2)');

    const setActiveLink = (links) => {
      links.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref === '/' ? '' : linkHref.split('/').pop();
        const linkPageName = linkPath === '' ? 'index.html' : linkPath;
        link.classList.remove('font-bold');
        link.classList.add('font-light');
        if (linkPageName === pageName) {
          link.classList.remove('font-light');
          link.classList.add('font-bold');
        }
      });
    };
    setActiveLink(desktopNavLinks);
    setActiveLink(mobileNavLinks);
  }

  // تنفيذ تحديث تصميم النافبار أول مرة
  updateNavbar();
  // ------------------- [END NAVBAR SECTION] -------------------


  // ------------------- [FLOATING ANIMATION SECTION] -------------------
  // Floating animation (for icons or shapes)
  const floatingElements = document.querySelectorAll('.animate-float, .animate-float-delay');
  floatingElements.forEach(element => {
    if (element.classList.contains('animate-float-delay')) {
      element.style.animation = 'floatAndRotate 3s ease-in-out infinite 0.5s';
    } else {
      element.style.animation = 'floatAndRotate 3s ease-in-out infinite';
    }
    element.style.visibility = 'visible';
  });
  // Inject keyframes if not present
  if (!document.querySelector('#float-animation')) {
    const style = document.createElement('style');
    style.id = 'float-animation';
    style.textContent = `
      @keyframes floatAndRotate {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
        50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        100% { transform: translateY(0px) rotate(360deg); opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);
  }
  // ------------------- [END FLOATING ANIMATION SECTION] -------------------


  // ------------------- [CAROUSEL SECTION (HOME PAGE)] -------------------
  if (isHomePage() || hasCarousel) {
    // كل من كود الكاروسيل الأساسي ينفذ فقط في الصفحة الرئيسية التي يحوي فيها كلاس carousel-container
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button-prev');
    const nextBtn = document.querySelector('.carousel-button-next');

    if (carouselContainer && carouselSlides.length > 0) {
      let currentIndex = 0, gap = 16, slidesToShow = 1, slideWidth = 0;

      function calculateSlidesToShow() {
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
      }

      function updateCarousel(withAnimation = true) {
        if (!carouselContainer || carouselSlides.length === 0) return;

        carouselContainer.style.transition = withAnimation ? 'transform 0.5s ease-in-out' : 'none';
        const wrapperWidth = carouselContainer.parentElement.clientWidth;
        const totalGapWidth = (slidesToShow - 1) * gap;
        slideWidth = (wrapperWidth - totalGapWidth) / slidesToShow;

        carouselSlides.forEach((slide, index) => {
          slide.style.width = `${slideWidth}px`;
          slide.style.marginRight = (index < carouselSlides.length - 1) ? `${gap}px` : '0';
        });

        const translateValue = -currentIndex * (slideWidth + gap);
        carouselContainer.style.transform = `translateX(${translateValue}px)`;
      }

      function handleNext() {
        if (currentIndex >= (carouselSlides.length - slidesToShow)) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        updateCarousel();
      }

      function handlePrev() {
        if (currentIndex <= 0) {
          currentIndex = carouselSlides.length - slidesToShow;
        } else {
          currentIndex--;
        }
        updateCarousel();
      }

      nextBtn?.addEventListener('click', handleNext);
      prevBtn?.addEventListener('click', handlePrev);

      // Touch/Swipe support
      let touchStartX = 0, isDragging = false;
      carouselContainer.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
      }, { passive: true });

      carouselContainer.addEventListener('touchend', e => {
        if (!isDragging) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? handleNext() : handlePrev();
        }
        isDragging = false;
      });

      // Mouse drag support
      let mouseStartX = 0, isMouseDragging = false;
      carouselContainer.addEventListener('mousedown', e => {
        mouseStartX = e.clientX;
        isMouseDragging = true;
        carouselContainer.style.cursor = 'grabbing';
        carouselContainer.style.userSelect = 'none';
      });

      carouselContainer.addEventListener('mouseup', e => {
        if (!isMouseDragging) return;
        const diff = mouseStartX - e.clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? handleNext() : handlePrev();
        }
        isMouseDragging = false;
        carouselContainer.style.cursor = 'grab';
        carouselContainer.style.userSelect = 'auto';
      });

      carouselContainer.addEventListener('mouseleave', () => {
        if (isMouseDragging) {
          isMouseDragging = false;
          carouselContainer.style.cursor = 'grab';
          carouselContainer.style.userSelect = 'auto';
        }
      });

      carouselContainer.style.cursor = 'grab';

      // Debounced resize handler
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          calculateSlidesToShow();
          updateCarousel(false);
        }, 250);
      });

      // Initial setup
      calculateSlidesToShow();
      updateCarousel(false);

      console.log('Carousel initialized successfully'); // Debug log
    }
  }
  // ------------------- [END CAROUSEL SECTION] -------------------


  // ------------------- [SMOOTH SCROLL (ALL PAGES)] -------------------
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // ------------------- [END SMOOTH SCROLL SECTION] -------------------
});