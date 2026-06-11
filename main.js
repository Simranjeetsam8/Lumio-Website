// ── 1. MOBILE HAMBURGER MENU (Works on all pages) ──
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

// ── 2. SCROLL NAVBAR SHADOW (Works on all pages) ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
});

// ── 3. 15% DISCOUNT FORM (Runs on the services page) ──
function submitDiscountLead() {
  const phoneEl = document.getElementById('discount-phone');
  const emailEl = document.getElementById('discount-email');
  
  if (phoneEl && emailEl) {
    const phone = phoneEl.value;
    const email = emailEl.value;
    const body = encodeURIComponent(`Mobile Number: ${phone}\nEmail Address: ${email}`);
    window.location.href = `mailto:info@lumiocleaning.com?subject=${encodeURIComponent('Lumio 15% Discount Customer')}&body=${body}`;
  }
}
