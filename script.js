// ── Navigation active state + mobile toggle ──────────────────────────────

const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.querySelector('.nav-links');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

navToggle && navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close mobile menu on link click
navMenu && navMenu.addEventListener('click', e => {
  if (e.target.tagName === 'A') navMenu.classList.remove('open');
});

// ── Intersection Observer for fade-in animations ─────────────────────────

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Scroll listener ───────────────────────────────────────────────────────

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
