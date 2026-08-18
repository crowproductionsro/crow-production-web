// Cookie consent banner
(function () {
  var STORAGE_KEY = 'crow_cookie_consent';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  var acceptBtn = document.getElementById('cookieAccept');
  var declineBtn = document.getElementById('cookieDecline');

  if (!localStorage.getItem(STORAGE_KEY)) {
    banner.hidden = false;
  }

  function setConsent(value) {
    localStorage.setItem(STORAGE_KEY, value);
    banner.hidden = true;
    document.dispatchEvent(new CustomEvent('cookieconsentchange', { detail: { consent: value } }));
  }

  acceptBtn.addEventListener('click', function () { setConsent('accepted'); });
  declineBtn.addEventListener('click', function () { setConsent('rejected'); });
})();
