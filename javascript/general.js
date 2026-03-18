document.addEventListener("click", function (e) {
  if (e.target.classList.contains("cta-go-back")) {
    window.history.back();
  }
});
