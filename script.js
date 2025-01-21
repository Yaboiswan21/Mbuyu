// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Fade-in animations
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Initialize fade-in effect
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
  });
  