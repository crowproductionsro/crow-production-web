// Before/after image compare slider
(function () {
  function initCompare(el) {
    var dragging = false;

    function updatePos(clientX) {
      var rect = el.getBoundingClientRect();
      var pos = ((clientX - rect.left) / rect.width) * 100;
      pos = Math.max(0, Math.min(100, pos));
      el.style.setProperty('--pos', pos + '%');
    }

    el.addEventListener('pointerdown', function (e) {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      updatePos(e.clientX);
    });
    el.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      updatePos(e.clientX);
    });
    el.addEventListener('pointerup', function () { dragging = false; });
    el.addEventListener('pointercancel', function () { dragging = false; });
  }

  document.querySelectorAll('[data-image-compare]').forEach(initCompare);
})();
