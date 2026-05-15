// ===== NAV =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navIndicator = document.querySelector('.nav-indicator');

function updateIndicator(btn) {
  const rect = btn.getBoundingClientRect();
  const navRect = btn.closest('.top-nav').getBoundingClientRect();
  navIndicator.style.left = (rect.left - navRect.left) + 'px';
  navIndicator.style.width = rect.width + 'px';
}

const activeBtn = document.querySelector('.nav-link.active');
setTimeout(() => { if (activeBtn) updateIndicator(activeBtn); }, 50);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    link.classList.add('active');
    const target = document.getElementById(link.dataset.section);
    if (target) target.classList.add('active');
    updateIndicator(link);
    if (link.dataset.section === 'about') setTimeout(animateSkills, 100);
  });
});

window.addEventListener('resize', () => {
  const active = document.querySelector('.nav-link.active');
  if (active) updateIndicator(active);
});

// ===== SKILL BARS =====
function animateSkills() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = '0';
    const w = bar.dataset.width;
    setTimeout(() => { bar.style.width = w + '%'; }, 80);
  });
}
setTimeout(animateSkills, 400);

// ===== CONTACT FORM =====
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn span');
  btn.textContent = 'Sent! ✓';
  setTimeout(() => { btn.textContent = 'Send Message'; }, 3000);
});