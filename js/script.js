var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-open");
  overlay.classList.add("modal-open");

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-open");
  overlay.classList.remove("modal-open");

});
