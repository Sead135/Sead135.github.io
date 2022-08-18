const menuButton = document.querySelector(".menu__buttom");
const navbar = document.querySelector(".navbar");
const menuItems = document.querySelector(".menu__items");
const navbarButton = document.querySelector(".navbar__button");
const orderButton = document.querySelector(".order__button");
const modal = document.querySelector(".modal");
const timeMin = document.querySelector(".min");
const timeSec = document.querySelector(".sec");
const timeBlock = document.querySelector(".time");
const buttons = document.querySelectorAll(".button");
const order = document.querySelector(".order");

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 200,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".navbar__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

const toggleMenu = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("fixed");
};

menuButton.addEventListener("click", () => {
  menuItems.addEventListener("click", () => {
    if (
      document.body.classList.contains("fixed") &&
      navbar.classList.contains("active")
    ) {
      toggleMenu();
    }
  });
  navbarButton.addEventListener("click", toggleMenu);
  toggleMenu();
});

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("show");
  setTimeout(() => modal.classList.remove("show"), 5000);
  const closeModal = document.querySelector(".modal__close");
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const timer = () => {
  let countdown = 30 * 60 * 1000;
  const getTimer = setInterval(() => {
    countdown -= 1000;
    let min = Math.floor(countdown / (60 * 1000));
    let sec = Math.floor((countdown - min * 60 * 1000) / 1000);

    if (countdown <= 0) {
      timeBlock.classList.add("animated");
      timeMin.innerHTML = 0;
      timeSec.innerHTML = 0;
      clearInterval(getTimer);
    } else {
      timeMin.innerHTML = min;
      timeSec.innerHTML = sec;
    }
  }, 1000);
};

timer();

const goToForm = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo(0, order.offsetTop);
    });
  });
};

goToForm();