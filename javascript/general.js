const goBackBtn = document.querySelector(".cta-go-back");

if (goBackBtn) {
  goBackBtn.addEventListener("click", function () {
    window.history.back();
  });
}
