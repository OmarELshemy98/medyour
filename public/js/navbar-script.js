// Wait until the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the navbar by the ID set in HtmlNavbarAr.tsx (should match id used)
  // In your code it's either 'navbar' or 'home-nav', but mainly 'navbar' for regular pages
  const navbar = document.getElementById('navbar');
  // Check for HeroHeader's <header> tag presence on the page
  const hasHeroHeader = !!document.querySelector('header');

  // If navbar not found, do nothing
  if (!navbar) return;

  // Classes from HtmlNavbarAr.tsx for the background image
  const bgClasses = [
    'bg-[url("/images/navbar-background.png")]',
    'bg-cover',
    'bg-center'
  ];

  function setTransparent() {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove(...bgClasses);
  }
  function setBackground() {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-[url("/images/navbar-background.png")]', 'bg-cover', 'bg-center');
  }

  if (hasHeroHeader) {
    // Page has HeroHeader (header tag), start with transparent background
    function onScroll() {
      if (window.scrollY > 10) {
        setBackground();
      } else {
        setTransparent();
      }
    }
    // Set initial state
    onScroll();
    // Listen for scroll events
    window.addEventListener('scroll', onScroll);
  } else {
    // No HeroHeader: always apply background image
    setBackground();
  }
});