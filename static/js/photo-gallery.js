// Classify photo project gallery images as portrait/landscape for an adaptive grid
(function () {
  function classify(img) {
    if (!img.naturalWidth || !img.naturalHeight) return;
    var ratio = img.naturalWidth / img.naturalHeight;
    if (ratio < 0.85) {
      img.classList.add("is-portrait");
    } else if (ratio > 1.3) {
      img.classList.add("is-landscape");
    }
  }

  document.querySelectorAll(".photo-gallery .gallery-img").forEach(function (img) {
    if (img.complete) {
      classify(img);
    } else {
      img.addEventListener("load", function () { classify(img); });
    }
  });
})();
