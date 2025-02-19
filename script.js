document.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      const position = el.getBoundingClientRect();
      if (position.top < window.innerHeight) {
        el.classList.add('scroll-in-view');
      }
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('hacker-mode-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('hacker-mode');
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

  document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("hero-video");

    // Check if the user is on a desktop (width > 768px)
    if (window.innerWidth > 768) {
        video.setAttribute("autoplay", "true");
        video.play().catch(error => console.log("Autoplay blocked:", error));
    }
});