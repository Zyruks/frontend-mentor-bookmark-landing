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

function featureSelection(active, inactiveOne, inactiveTwo, animation) {
  featureControls[active].addEventListener("click", () => {
    if (featureControls[active].getAttribute("data-state") !== "active") {
      featureControls[active].setAttribute("data-state", "willBeActive");
      if (window.innerWidth < 1025) {
        featureAnimationMobile();
      } else {
        featureAnimationDesktop();
      }
      setTimeout(() => {
        featureControls[inactiveOne].setAttribute("data-state", "inactive");
        featureControls[inactiveTwo].setAttribute("data-state", "inactive");
        featureControls[active].setAttribute("data-state", "active");
      }, 350);

      // ? Carousel

      carouselActivity(active, inactiveOne, inactiveTwo);
    }
  });
}

featureSelection(0, 1, 2);
featureSelection(1, 0, 2);

featureSelection(2, 1, 0);
