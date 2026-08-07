// mobile rail toggle
const menuBtn = document.getElementById('menuBtn');
const rail = document.getElementById('rail');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    rail.classList.toggle('open');
  });
  // close menu after clicking a nav link (mobile)
  rail.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => rail.classList.remove('open'));
  });
}

// scroll reveal for sections
const revealEls = document.querySelectorAll('.reveal');
const revealIo = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
revealEls.forEach(el => revealIo.observe(el));

// skill bar fill on view
const bars = document.querySelectorAll('.skill-fill');
const barIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.w + '%';
      barIo.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => barIo.observe(b));

// active nav link highlight based on scroll position
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.rail-nav a');
const navIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.rail-nav a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.4, rootMargin: '-10% 0px -50% 0px' });
sections.forEach(s => navIo.observe(s));
