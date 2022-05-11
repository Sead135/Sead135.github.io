const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel__items");
const carouselItem = document.querySelectorAll(".carousel__item");

const nextButton = document.querySelector(".carousel__next-btn");
const prevButton = document.querySelector(".carousel__prev-btn");
const carouselContainer = document.querySelector(".carousel__container");

const nextContainer = document.querySelector(".carousel__next");
const prevContainer = document.querySelector(".carousel__prev");

const widthCarousel = carousel.offsetWidth;
const widthCarouselItems = carouselItems.offsetWidth;
const widthOffset = widthCarouselItems - widthCarousel;
const widthDiff = (widthOffset / carouselItem.length) * 2;

nextButton.addEventListener("click", () => {
  carouselContainer.style.scrollBehavior = 'smooth'
  carouselContainer.scrollLeft += widthDiff
  carouselContainer.style.scrollBehavior = 'auto'
});

prevButton.addEventListener("click", () => {
  carouselContainer.style.scrollBehavior = 'smooth'
  carouselContainer.scrollLeft -= widthDiff
  carouselContainer.style.scrollBehavior = 'auto'
});

carouselContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  carouselContainer.scrollLeft += e.deltaY;
  carouselContainer.scrollLeft += e.deltaX;
});

// Точки, еще не сделаны
const index = 1;

const createDot = () => {
  const carouselDot = document.createElement("div");
  carouselDot.classList.add("carousel__dot");
  for (let i = 0; i <= carouselItem.length; i++) {
    const dotItem = document.createElement("div");
    index === i + 1
      ? dotItem.classList.add("dot__item", "active")
      : dotItem.classList.add("dot__item");
    carouselDot.appendChild(dotItem);
    carousel.appendChild(carouselDot);
  }
};