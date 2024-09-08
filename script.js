document.addEventListener('scroll', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const heroSection = document.querySelector('.hero-section'); // Select the hero-section

  fadeElements.forEach(el => {
    // Exclude the hero-section from scroll effect
    if (el !== heroSection) {
      const position = el.getBoundingClientRect();
      // Add scroll-in-view class when the element is in view
      if (position.top < window.innerHeight) {
        el.classList.add('scroll-in-view');
      }
    }
  });
});

window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav .right a');
  const heroSection = document.querySelector('.hero-section'); // Select the hero-section

  sections.forEach((section, index) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;

    // Only apply navigation link highlighting when not on the hero-section
    if (section !== heroSection && top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      navLinks[index].classList.add('active');
    }
  });
});
