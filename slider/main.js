const sliderItems = document.querySelector(".slider__items")
const sliderItem = document.querySelectorAll(".slider__item")
const nextSlide = document.querySelector(".slider__next")
const prevSlide = document.querySelector(".slider__prev")
const slider = document.querySelector(".slider")
const offsetSlider = sliderItems.offsetWidth - slider.offsetWidth
let count = 0

const interval = setInterval(nextSlideClick, 5000)

function stopInterval() {
    clearInterval(interval)
    setTimeout(interval, 5000)
}

function nextSlideClick() {
    count >= sliderItem.length ? count = 0 : count++;
    sliderItems.style.transform = `translateX(-${count*offsetSlider/sliderItem.length}px)`
}

function prevSlideClick() {
    count <= 0 ? count = 0 : count--
    sliderItems.style.transform = `translateX(-${count*offsetSlider/sliderItem.length}px)`
}
nextSlide.addEventListener('click', nextSlideClick)
prevSlide.addEventListener('click', prevSlideClick)

sliderItems.addEventListener('touchstart', (e) => console.log(e))