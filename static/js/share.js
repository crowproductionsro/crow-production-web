// Blog post share buttons
(function () {
  var shareUrls = {
    facebook: function (url, title) {
      return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    },
    x: function (url, title) {
      return "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(title);
    },
    whatsapp: function (url, title) {
      return "https://api.whatsapp.com/send?text=" + encodeURIComponent(title + " " + url);
    },
    linkedin: function (url, title) {
      return "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
    }
  };

  document.querySelectorAll(".share-section").forEach(function (section) {
    var url = section.getAttribute("data-share-url");
    var title = section.getAttribute("data-share-title");
    var feedback = section.querySelector("[data-share-feedback]");

    section.querySelectorAll("[data-share-network]").forEach(function (btn) {
      var network = btn.getAttribute("data-share-network");

      btn.addEventListener("click", function () {
        if (network === "copy") {
          navigator.clipboard.writeText(url).then(function () {
            if (feedback) {
              feedback.hidden = false;
              setTimeout(function () { feedback.hidden = true; }, 3000);
            }
          });
          return;
        }
        var builder = shareUrls[network];
        if (builder) {
          window.open(builder(url, title), "_blank", "noopener,width=600,height=500");
        }
      });
    });
  });
})();
