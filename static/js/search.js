// Search overlay powered by Pagefind
(function () {
  var toggle = document.getElementById('searchToggle');
  var overlay = document.getElementById('searchOverlay');
  var closeBtn = document.getElementById('searchClose');
  if (!toggle || !overlay) return;

  var loaded = false;

  function loadPagefind() {
    if (loaded) return;
    loaded = true;

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/pagefind/pagefind-ui.css';
    document.head.appendChild(link);

    var script = document.createElement('script');
    script.src = '/pagefind/pagefind-ui.js';
    script.onload = function () {
      new PagefindUI({
        element: '#pagefindSearch',
        showSubResults: true,
        showImages: false,
        translations: {
          placeholder: 'Čo hľadáte...',
          clear_search: 'Vymazať',
          load_more: 'Zobraziť viac výsledkov',
          zero_results: 'Nič sa nenašlo pre [SEARCH_TERM]'
        }
      });
      var input = overlay.querySelector('input');
      if (input) input.focus();
    };
    document.body.appendChild(script);
  }

  function openSearch() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    loadPagefind();
    var input = overlay.querySelector('input');
    if (input) input.focus();
  }

  function closeSearch() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) closeSearch();
  });
})();
