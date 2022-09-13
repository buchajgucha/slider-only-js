let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector(".slider__window");
const track = document.querySelector(".slider__track");
const item = document.querySelector(".slider__item");
const btnPrev = document.querySelector(".btn__prev");
const btnNext = document.querySelector(".btn__next");
const items = document.querySelectorAll(".slider__item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", function () {
  position -= 1;
  setAnimation();
  if (Math.abs(position) === items.length - 1) {
    position = 0;
    setAnimationNone();
  }

  setPosition();
});

btnPrev.addEventListener("click", function () {
  position += 1;
  setAnimation();
  if (position === 1) {
    position = items.length * -1 + slidesToShow;
    setAnimationNone();
  }

  setPosition();
});

const setPosition = () => {
  track.style.transform = `translateX(${position * movePosition}px)`;
};
const setAnimation = function () {
  track.style.transition = "all 0.5s";
};
const setAnimationNone = function () {
  track.style.transition = "none";
};
