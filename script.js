document.addEventListener('scroll', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect();
    if (position.top < window.innerHeight) {
      el.classList.add('scroll-in-view');
    }
  });
});

window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav .right a');

  sections.forEach((section, index) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      navLinks[index].classList.add('active');
    }
  });
});

document.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(el => {
    const scrolled = window.scrollY;
    el.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
  });
});
