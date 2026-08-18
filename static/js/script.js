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

// Article gallery lightbox
const galleryImages = document.querySelectorAll('.gallery-img');

if (galleryImages.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'gallery-lightbox';
  lightbox.hidden = true;
  const lightboxImg = document.createElement('img');
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
    });
  });

  lightbox.addEventListener('click', () => { lightbox.hidden = true; });
}

// Blog category filter
const blogFilters = document.getElementById('blogFilters');

if (blogFilters) {
  const blogCards = document.querySelectorAll('#blogGrid .blog-card');

  blogFilters.addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;

    blogFilters.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    blogCards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
    });
  });
}
