"use strict";

const featureControls = document
  .querySelector(".js-feature-controls")
  .firstElementChild.querySelectorAll("li");
const carousel = document.querySelector(".js-carousel").children;

function classCleaner(active, inactiveOne, inactiveTwo) {
  setTimeout(() => {
    carousel[active].classList.remove("anime-right-to-left-in");
    carousel[active].classList.remove("anime-right-to-left-out");
    carousel[active].classList.remove("anime-left-to-right-in");
    carousel[active].classList.remove("anime-left-to-right-out");

    carousel[inactiveOne].classList.remove("anime-right-to-left-out");
    carousel[inactiveOne].classList.remove("anime-left-to-right-out");
    carousel[inactiveOne].classList.remove("anime-right-to-left-in");
    carousel[inactiveOne].classList.remove("anime-left-to-right-in");

    carousel[inactiveTwo].classList.remove("anime-left-to-right-in");
    carousel[inactiveTwo].classList.remove("anime-right-to-left-in");
    carousel[inactiveTwo].classList.remove("anime-left-to-right-out");
    carousel[inactiveTwo].classList.remove("anime-right-to-left-out");
  }, 380);
}

function featureSelection(active, inactiveOne, inactiveTwo) {
  featureControls[active].addEventListener("click", () => {
    if (featureControls[active].getAttribute("data-state") !== "active") {
      featureControls[active].setAttribute("data-state", "active");
      featureControls[inactiveOne].setAttribute("data-state", "inactive");
      featureControls[inactiveTwo].setAttribute("data-state", "inactive");
      featureControls[inactiveOne].classList.remove(
        "translation-right-to-left"
      );

      // carousel

      carousel[active].classList.add("dp-grid");
      setTimeout(() => {
        carousel[inactiveOne].classList.remove("dp-grid");
        carousel[inactiveTwo].classList.remove("dp-grid");
      }, 370);

      if (active === 0 && carousel[inactiveOne].classList.contains("dp-grid")) {
        carousel[active].classList.add("anime-left-to-right-in");
        carousel[inactiveOne].classList.add("anime-left-to-right-out");

        classCleaner(active, inactiveOne, inactiveTwo);
      } else if (
        active === 0 &&
        carousel[inactiveTwo].classList.contains("dp-grid")
      ) {
        carousel[active].classList.add("anime-left-to-right-in");
        carousel[inactiveTwo].classList.add("anime-left-to-right-out");

        classCleaner(active, inactiveOne, inactiveTwo);
      } else if (
        active === 1 &&
        carousel[inactiveOne].classList.contains("dp-grid")
      ) {
        carousel[active].classList.add("anime-right-to-left-in");
        carousel[inactiveOne].classList.add("anime-right-to-left-out");

        classCleaner(active, inactiveOne, inactiveTwo);
      } else if (
        active === 1 &&
        carousel[inactiveTwo].classList.contains("dp-grid")
      ) {
        carousel[active].classList.add("anime-left-to-right-in");
        carousel[inactiveTwo].classList.add("anime-left-to-right-out");
        console.log("meet");

        classCleaner(active, inactiveOne, inactiveTwo);
      } else if (
        active === 2 &&
        carousel[inactiveOne].classList.contains("dp-grid")
      ) {
        carousel[active].classList.add("anime-right-to-left-in");
        carousel[inactiveOne].classList.add("anime-right-to-left-out");
        classCleaner(active, inactiveOne, inactiveTwo);
      } else if (
        active === 2 &&
        carousel[inactiveTwo].classList.contains("dp-grid")
      ) {
        carousel[active].classList.add("anime-right-to-left-in");
        carousel[inactiveTwo].classList.add("anime-right-to-left-out");

        classCleaner(active, inactiveOne, inactiveTwo);
      }
    }
  });
}

featureSelection(0, 1, 2);

featureSelection(1, 0, 2);

featureSelection(2, 1, 0);
