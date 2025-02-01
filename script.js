// Sticky Navbar on Scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var navLinks = document.querySelectorAll('.nav-link');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active section
  let fromTop = window.scrollY + navbar.offsetHeight;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Mobile Menu Toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}
