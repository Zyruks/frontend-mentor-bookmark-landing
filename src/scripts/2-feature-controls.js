const featureControls = document
  .querySelector(".js-feature-controls")
  .firstElementChild.querySelectorAll("li");
const carousel = document.querySelectorAll(".js-carousel__item");
const featureControlAnimations = {
  in: ["anime-left-to-right-in", "anime-right-to-left-in"],
  out: ["anime-left-to-right-out", "anime-right-to-left-out"],
};

function classCleaner(tag) {
  setTimeout(() => {
    for (let x = 0; x < 3; x++) {
      for (let i = 0; i < 2; i++) {
        tag[x].classList.remove(featureControlAnimations.in[i]);
        tag[x].classList.remove(featureControlAnimations.out[i]);
      }
    }
  }, 380);
}

function carouselActivity(active, inactiveOne, inactiveTwo, animation) {
  carousel[active].classList.add("dp-grid");
  setTimeout(() => {
    carousel[inactiveOne].classList.remove("dp-grid");
    carousel[inactiveTwo].classList.remove("dp-grid");
  }, 370);

  //? Animations
  for (let i = 0; i <= 2; i++) {
    if (
      active === i &&
      carousel[inactiveOne].classList.contains("dp-grid") === true
    ) {
      carousel[active].classList.add(featureControlAnimations.in[animation]);
      carousel[inactiveOne].classList.add(
        featureControlAnimations.out[animation]
      );
    } else {
      carousel[active].classList.add(featureControlAnimations.in[animation]);
      carousel[inactiveTwo].classList.add(
        featureControlAnimations.out[animation]
      );
    }
  }
}

function featureSelection(active, inactiveOne, inactiveTwo, animation) {
  featureControls[active].addEventListener("click", () => {
    if (featureControls[active].getAttribute("data-state") !== "active") {
      featureControls[active].setAttribute("data-state", "active");
      featureControls[inactiveOne].setAttribute("data-state", "inactive");
      featureControls[inactiveTwo].setAttribute("data-state", "inactive");

      // ? Carousel
      if (
        active === 1 &&
        carousel[inactiveTwo].classList.contains("dp-grid") === true
      ) {
        carouselActivity(active, inactiveOne, inactiveTwo, 0);
      } else {
        carouselActivity(active, inactiveOne, inactiveTwo, animation);
      }

      classCleaner(carousel);
    }
  });
}

featureSelection(0, 1, 2, 0);

featureSelection(1, 0, 2, 1);

featureSelection(2, 1, 0, 1);
