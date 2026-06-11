// ── 1. INITIALIZE EMAILJS (Keeps your contact form connected) ──
emailjs.init({
  publicKey: "XYqjn-ddGsfnuf2Zf"
});

// ── 2. MOBILE HAMBURGER MENU ──
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('open');
}

// ── 3. SCROLL NAVBAR SHADOW ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ── 4. SERVICE SELECTOR (Booking Form Options) ──
function selectService(el) {
  document.querySelectorAll('.service-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

// ── 5. EMAILJS CONTACT FORM SUBMISSION ──
function submitContact() {
  const firstName = document.getElementById("contact-firstname").value;
  const lastName  = document.getElementById("contact-lastname").value;
  const email     = document.getElementById("contact-email").value;
  const subject   = document.getElementById("contact-subject").value;
  const message   = document.getElementById("contact-message").value;

  emailjs.send(
    "service_giok60r",
    "template_142d6nl",
    {
      from_name: firstName + " " + lastName,
      reply_to: email,
      subject: subject,
      message: message
    }
  )
  .then(() => {
    const successMessage = document.getElementById("contact-success");
    if (successMessage) successMessage.classList.add("show");

    setTimeout(() => {
      if (successMessage) successMessage.classList.remove("show");
    }, 5000);

    document.getElementById("contact-firstname").value = "";
    document.getElementById("contact-lastname").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-subject").value = "Request a Quote";
    document.getElementById("contact-message").value = "";
  })
  .catch((error) => {
    alert("Failed to send message. Please try again.");
    console.error("EmailJS Error:", error);
  });
}

// ── 6. ORIGINAL BOOKING FORM SUBMIT ──
function submitBook() {
  const inputs = document.querySelectorAll('#page-book input, #page-book select, #page-book textarea');
  const service = document.querySelector('#page-book .service-option.selected .s-name');
  let details = `Booking Request - Lumio Cleaning\n\nService: ${service ? service.textContent : 'Not selected'}\n`;
  
  inputs.forEach(el => { 
    if(el.value) details += `${el.placeholder || el.name || el.type}: ${el.value}\n`; 
  });
  
  const body = encodeURIComponent(details);
  window.location.href = `mailto:info@lumiocleaning.com?subject=${encodeURIComponent('[Lumio Cleaning] New Booking Request')}&body=${body}`;
  
  const s = document.getElementById('book-success');
  if (s) {
    s.classList.add('show');
    setTimeout(() => s.classList.remove('show'), 5000);
  }
}

// ── 7. CAREER MODAL CONTROLS ──
function showApplyModal(role) {
  const modalTitle = document.getElementById('modal-title');
  const applyModal = document.getElementById('apply-modal');
  if (modalTitle) modalTitle.textContent = role;
  if (applyModal) {
    applyModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

// Close Modal function
function closeModal() {
  const applyModal = document.getElementById('apply-modal');
  if (applyModal) {
    applyModal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Setup background click listener safely once the page loads
window.addEventListener('DOMContentLoaded', () => {
  const applyModal = document.getElementById('apply-modal');
  if (applyModal) {
    applyModal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }
});

// ── 8. JOB APPLICATION FORM ──
function submitApply() {
  const s = document.getElementById('apply-success');
  if (s) {
    s.classList.add('show');
    setTimeout(() => { s.classList.remove('show'); closeModal(); }, 4000);
  }
}

// ── 9. 15% DISCOUNT FORM ──
function submitDiscountLead() {
  const phone = document.getElementById('discount-phone').value;
  const email = document.getElementById('discount-email').value;
  const body = encodeURIComponent(`Mobile Number: ${phone}\nEmail Address: ${email}`);
  window.location.href = `mailto:info@lumiocleaning.com?subject=${encodeURIComponent('Lumio 15% Discount Customer')}&body=${body}`;
}
