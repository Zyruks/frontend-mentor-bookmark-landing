"use strict";

const burgerIcon = document.querySelector(".js-burger-icon");
const primaryNav = document.querySelector(".js-primary-nav");
const primaryNavLogo = document.querySelector(".js-logo");

burgerIcon.addEventListener("click", () => {
  if (primaryNav.classList.contains("dp-flex") !== true) {
    primaryNav.classList.add("dp-flex");
    burgerIcon.setAttribute("src", "./assets/svg/icon-close.svg");
    primaryNavLogo.setAttribute("data-state", "open");
  } else {
    primaryNav.classList.remove("dp-flex");
    burgerIcon.setAttribute("src", "./assets/svg/icon-hamburger.svg");
    primaryNavLogo.setAttribute("data-state", "close");
  }
});
