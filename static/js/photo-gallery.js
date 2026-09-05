// Classify photo project images as portrait/landscape for adaptive grids
(function () {
  function ratioClass(img) {
    if (!img.naturalWidth || !img.naturalHeight) return null;
    var ratio = img.naturalWidth / img.naturalHeight;
    if (ratio < 0.85) return "is-portrait";
    if (ratio > 1.3) return "is-landscape";
    return null;
  }

  function watch(img, onReady) {
    if (img.complete) {
      onReady();
    } else {
      img.addEventListener("load", onReady);
    }
  }

  // Article gallery grid (project single page)
  document.querySelectorAll(".photo-gallery .gallery-img").forEach(function (img) {
    watch(img, function () {
      var cls = ratioClass(img);
      if (cls) img.classList.add(cls);
    });
  });

  // Portfolio listing tiles (Foto group page only — other listings stay a uniform height)
  document.querySelectorAll(".photo-portfolio-grid .portfolio-item:not(.item-large)").forEach(function (item) {
    var img = item.querySelector(".portfolio-thumb");
    if (!img || img.tagName !== "IMG") return;
    watch(img, function () {
      var cls = ratioClass(img);
      if (cls) item.classList.add(cls);
    });
  });
})();
