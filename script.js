/* ==========================================================
   RED BEACON ASSET MANAGEMENT — script.js
   Handles: sticky nav, smooth scroll, counter animation,
   fade-in on scroll, testimonial carousel, contact form
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initFadeIn();
  initCounters();
  initCarousel();
  initForm();
  initCopyrightYear();
});

/* ----------------------------------------------------------
   NAVBAR
   Adds .scrolled class when page scrolls past 60px.
   Hamburger toggles mobile nav open/close.
   ---------------------------------------------------------- */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close mobile menu when a nav link is clicked */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ----------------------------------------------------------
   SMOOTH SCROLL
   Intercepts all anchor links that point to an id on the page
   and scrolls smoothly, accounting for the fixed navbar height.
   ---------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const targetTop    = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------------------------
   FADE-IN ON SCROLL
   Uses IntersectionObserver to reveal .fade-in elements as
   they enter the viewport. Stagger effect via CSS delay.
   ---------------------------------------------------------- */
function initFadeIn() {
  /* If browser doesn't support IntersectionObserver, show everything */
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); /* Animate once */
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ----------------------------------------------------------
   ANIMATED NUMBER COUNTERS
   Reads data-target, data-prefix, data-suffix from each
   .counter-value element and animates from 0 over ~2 seconds.
   Fires once when the .counters block enters the viewport.
   ---------------------------------------------------------- */
function initCounters() {
  const countersSection = document.querySelector('.counters');
  if (!countersSection) return;

  let triggered = false;

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !triggered) {
        triggered = true;
        observer.disconnect();
        document.querySelectorAll('.counter-value').forEach(animateCounter);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(countersSection);
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const prefix   = el.dataset.prefix  || '';
  const suffix   = el.dataset.suffix  || '';
  const isFloat  = !Number.isInteger(target);
  const duration = 2000; /* ms */
  const start    = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* Ease-out cubic */
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = target * eased;

    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = prefix + (isFloat ? target.toFixed(1) : target) + suffix;
  }

  requestAnimationFrame(step);
}

/* ----------------------------------------------------------
   TESTIMONIALS CAROUSEL
   Three slides, auto-rotates every 5 s, pauses on hover.
   Prev/Next buttons and dot indicators for manual control.
   ---------------------------------------------------------- */
function initCarousel() {
  const track      = document.getElementById('carouselTrack');
  const prevBtn    = document.getElementById('prevBtn');
  const nextBtn    = document.getElementById('nextBtn');
  const dotsEl     = document.getElementById('carouselDots');
  const carousel   = document.querySelector('.carousel');

  if (!track) return;

  const slides  = track.querySelectorAll('.testimonial-card');
  const dots    = dotsEl ? dotsEl.querySelectorAll('.dot') : [];
  const total   = slides.length;
  let current   = 0;
  let timer     = null;

  function goToSlide(index) {
    /* Wrap around */
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', String(active));
    });
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => goToSlide(current + 1), 5000);
  }

  function stopAuto() {
    clearInterval(timer);
    timer = null;
  }

  prevBtn.addEventListener('click', () => { goToSlide(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { goToSlide(current + 1); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index, 10));
      startAuto();
    });
  });

  /* Pause auto-rotate while hovering */
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  /* Touch / swipe support */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goToSlide(delta > 0 ? current + 1 : current - 1);
      startAuto();
    }
  }, { passive: true });

  /* Keyboard navigation when carousel is focused */
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goToSlide(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { goToSlide(current + 1); startAuto(); }
  });

  startAuto();
}

/* ----------------------------------------------------------
   CONTACT FORM
   Validates required fields client-side, then submits
   asynchronously via fetch so the page never reloads.
   FormSubmit.co processes the POST and emails the recipient.

   IMPORTANT: Replace "your-email@example.com" in index.html
   (the form action attribute) with your real email address.
   On the very first live submission, FormSubmit will send a
   one-time activation email — click it to enable the endpoint.
   ---------------------------------------------------------- */
function initForm() {
  const form      = document.getElementById('contactForm');
  const msgBox    = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!validateForm()) return;

    /* Disable button & show loading state */
    submitBtn.disabled     = true;
    submitBtn.textContent  = 'Sending…';
    clearMessage();

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body:   new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        showMessage('success', '✓ Your message has been sent! We\'ll be in touch within one business day.');
        form.reset();
        clearAllErrors();
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (err) {
      showMessage('error', 'Something went wrong. Please try again or email us directly at info@redbeacon.com.');
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send Message';
    }
  });

  /* Live validation — clear error once user starts correcting */
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => clearFieldError(field));
  });
}

/* ------ Validation helpers ------ */

function validateForm() {
  const form = document.getElementById('contactForm');
  let valid  = true;

  const fullName       = form.querySelector('#fullName');
  const email          = form.querySelector('#email');
  const investmentRange = form.querySelector('#investmentRange');

  if (!fullName.value.trim()) {
    setFieldError(fullName, 'fullNameError', 'Please enter your full name.');
    valid = false;
  } else {
    clearFieldError(fullName);
  }

  if (!email.value.trim()) {
    setFieldError(email, 'emailError', 'Please enter your email address.');
    valid = false;
  } else if (!isValidEmail(email.value.trim())) {
    setFieldError(email, 'emailError', 'Please enter a valid email address.');
    valid = false;
  } else {
    clearFieldError(email);
  }

  if (!investmentRange.value) {
    setFieldError(investmentRange, 'investmentRangeError', 'Please select an investment range.');
    valid = false;
  } else {
    clearFieldError(investmentRange);
  }

  return valid;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setFieldError(field, errorId, message) {
  field.classList.add('error');
  const el = document.getElementById(errorId);
  if (el) el.textContent = message;
}

function clearFieldError(field) {
  field.classList.remove('error');
  const errorId = field.id + 'Error';
  const el = document.getElementById(errorId);
  if (el) el.textContent = '';
}

function clearAllErrors() {
  document.querySelectorAll('.field-error').forEach(el => { el.textContent = ''; });
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

function showMessage(type, text) {
  const msgBox = document.getElementById('formMessage');
  msgBox.className = `form-message ${type}`;
  msgBox.textContent = text;
  /* Scroll the message into view smoothly */
  msgBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearMessage() {
  const msgBox = document.getElementById('formMessage');
  msgBox.className  = 'form-message';
  msgBox.textContent = '';
}

/* ----------------------------------------------------------
   COPYRIGHT YEAR
   Keeps the footer year automatically current.
   ---------------------------------------------------------- */
function initCopyrightYear() {
  const el = document.getElementById('copyrightYear');
  if (el) el.textContent = new Date().getFullYear();
}
