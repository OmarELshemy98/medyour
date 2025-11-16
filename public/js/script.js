document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle') || document.getElementById('menu-toggle-ar');
  const mobileMenu = document.getElementById('mobile-menu') || document.getElementById('mobile-menu-ar');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Floating Animation ---
  const floatingElements = document.querySelectorAll('.animate-float, .animate-float-delay');
  floatingElements.forEach(element => {
    element.style.animation = element.classList.contains('animate-float-delay')
      ? 'floatAndRotate 3s ease-in-out infinite 0.5s'
      : 'floatAndRotate 3s ease-in-out infinite';
    element.style.visibility = 'visible';
  });
  if (!document.querySelector('#float-animation')) {
    const style = document.createElement('style');
    style.id = 'float-animation';
    style.textContent = `@keyframes floatAndRotate{0%{transform:translateY(0) rotate(0deg);opacity:.8}50%{transform:translateY(-10px) rotate(180deg);opacity:1}100%{transform:translateY(0) rotate(360deg);opacity:.8}}`;
    document.head.appendChild(style);
  }

  // --- Navbar Scroll Behavior ---
  const navbar = document.getElementById('home-nav') || document.getElementById('navbar');
  const updateNavbar = () => {
    if (!navbar) return;

    // 'hero' mode (transparent at top) vs 'static' mode (always solid)
    if (navbar.getAttribute('data-mode') === 'hero') {
      if (window.scrollY > 10) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-[url("/images/navbar-background.png")]', 'bg-cover', 'bg-center');
      } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-[url("/images/navbar-background.png")]', 'bg-cover', 'bg-center');
      }
    } else {
      // Default behavior for non-hero pages
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-[url("/images/navbar-background.png")]', 'bg-cover', 'bg-center');
    }
  };
  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Run on initial load

  // --- Active Nav Link Styling ---
  const currentPath = window.location.pathname.split('/').pop();
  const pageName = currentPath === '' ? 'index.html' : currentPath;
  const isHomePage = () => {
    const path = window.location.pathname;
    // Check for root, index.html, /en, or /en/
    return path === '/' || path.endsWith('/index.html') || path === '/en' || path === '/en/' || path.endsWith('/en/index.html');
  };

  // Check if we are on the homepage (which has the carousel)
  const hasCarousel = document.querySelector('.carousel-container') !== null;

  if (isHomePage() || hasCarousel) {
    // --- Homepage Nav Link Logic ---
    const desktopNavLinks = document.querySelectorAll('#home-nav .hidden.md\\:flex a[href]:not(.bg-white):not(.bg-\\[\\#001218\\])');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .container a[href]:not(.bg-white):not(.border-2)');

    const setActiveLinkHome = (links) => {
      links.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref === '/' ? '' : (linkHref ? linkHref.split('/').pop() : '');
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

    // --- Homepage Carousel Logic ---
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button-prev');
    const nextBtn = document.querySelector('.carousel-button-next');

    if (carouselContainer && carouselSlides.length > 0) {
      let currentIndex = 0, gap = 16, slidesToShow = 1, slideWidth = 0;

      function calculateSlidesToShow() {
        const width = window.innerWidth;
        if (width >= 1024) { slidesToShow = 3; gap = 24; }
        else if (width >= 768) { slidesToShow = 2; gap = 20; }
        else { slidesToShow = 1; gap = 16; }
        const maxPossibleIndex = Math.max(0, carouselSlides.length - slidesToShow);
        currentIndex = Math.min(currentIndex, maxPossibleIndex);
      }

      function updateCarousel(withAnimation = true) {
        if (!carouselContainer || !carouselContainer.parentElement) return;

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
        if (currentIndex >= (carouselSlides.length - slidesToShow)) { currentIndex = 0; }
        else { currentIndex++; }
        updateCarousel();
      }

      function handlePrev() {
        if (currentIndex <= 0) { currentIndex = carouselSlides.length - slidesToShow; }
        else { currentIndex--; }
        updateCarousel();
      }

      if (nextBtn) nextBtn.addEventListener('click', handleNext);
      if (prevBtn) prevBtn.addEventListener('click', handlePrev);

      // Touch events
      let touchStartX = 0, isDragging = false;
      carouselContainer.addEventListener('touchstart', function (e) {
        if (e.touches && e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
          isDragging = true;
        }
      }, { passive: true });

      carouselContainer.addEventListener('touchend', function (e) {
        if (!isDragging) return;
        if (e.changedTouches && e.changedTouches.length > 0) {
          const diff = touchStartX - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) {
            diff > 0 ? handleNext() : handlePrev();
          }
        }
        isDragging = false;
      });

      // Mouse drag events
      let mouseStartX = 0, isMouseDragging = false;
      carouselContainer.addEventListener('mousedown', function (e) {
        mouseStartX = e.clientX;
        isMouseDragging = true;
        carouselContainer.style.cursor = 'grabbing';
        carouselContainer.style.userSelect = 'none';
      });

      carouselContainer.addEventListener('mouseup', function (e) {
        if (!isMouseDragging) return;
        const diff = mouseStartX - e.clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? handleNext() : handlePrev();
        }
        isMouseDragging = false;
        carouselContainer.style.cursor = 'grab';
        carouselContainer.style.userSelect = 'auto';
      });

      carouselContainer.addEventListener('mouseleave', function () {
        if (isMouseDragging) {
          isMouseDragging = false;
          carouselContainer.style.cursor = 'grab';
          carouselContainer.style.userSelect = 'auto';
        }
      });
      carouselContainer.style.cursor = 'grab';

      // Resize handler
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
    }

  } else {
    // --- Other Pages Nav Link Logic ---
    const desktopNavLinks = document.querySelectorAll('#navbar .hidden.md\\:flex a[href]:not(.bg-white):not(.bg-\\[\\#001218\\])');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .container a[href]:not(.bg-white):not(.border-2)');

    const setActiveLink = (links) => {
      links.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref === '/' ? '' : (linkHref ? linkHref.split('/').pop() : '');
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

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});