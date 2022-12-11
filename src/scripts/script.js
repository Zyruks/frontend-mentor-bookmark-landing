const burgerIcon = document.querySelector(".js-burger-icon");
const primaryNav = document.querySelector(".js-primary-nav");

burgerIcon.addEventListener("click", () => {
  if (primaryNav.classList.contains("dp-flex") !== true) {
    primaryNav.classList.add("dp-flex");
    burgerIcon.setAttribute("src", "./assets/svg/icon-close.svg");
  } else {
    primaryNav.classList.remove("dp-flex");
    burgerIcon.setAttribute("src", "./assets/svg/icon-hamburger.svg");
  }
});
