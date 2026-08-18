// Mobile menu toggle
const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');

burgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  burgerBtn.classList.toggle('active');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

// Header background on scroll
const siteHeader = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// Reviews carousel
const reviewsTrack = document.getElementById('reviewsTrack');

if (reviewsTrack) {
  const scrollAmount = () => reviewsTrack.querySelector('.review-card').offsetWidth + 24;

  document.querySelector('.reviews-prev').addEventListener('click', () => {
    reviewsTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  document.querySelector('.reviews-next').addEventListener('click', () => {
    reviewsTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}
