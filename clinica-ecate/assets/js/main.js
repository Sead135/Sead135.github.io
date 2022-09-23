const swiper = new Swiper(".slider__container", {
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    260: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1040: {
      slidesPerView: 3.8,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
  },
});

const programs = document.querySelector(".programs");
const button = document.getElementById("button");
const headerInner = document.querySelector(".header__inner");
button.addEventListener("click", () => {
  window.scrollTo(0, programs.offsetTop - 20);
});
window.addEventListener("scroll", () => {
  window.pageYOffset > 100
    ? headerInner.classList.add("show")
    : headerInner.classList.remove("show");
});