// ================= Carousel =================
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1, // показывать 3 слайда
  margin: 10,
  loop: true, // бесконечная прокрутка по кругу
  center: true,
  startPosition: 1, // чтобы слайдер начинался с первой позиции (2-ая картинка)
  // autoWidth: true, // чтобы размеры картинок были как указаны у меня
  responsive: {
    // breakpoint from 850 up
    425: {
      items: 2, // показывать 3 слайда
    },

    600: {
      items: 3, // показывать 3 слайда
    },
    // breakpoint from 1024 up
    1024: {
      margin: 20,
    },
    // breakpoint from 1269 up
    1269: {
      margin: 30,
    },
  },
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// ================= menu btn =================
// вариант 1:
const menuBtn = document.querySelector(".nav__btn-toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
// const header = document.querySelector(".header");
// const headerTop = document.getElementsByClassName("header__top")[0];

menuBtn.addEventListener("click", () => {
  menuIcon.classList.toggle("js-menu-icon-active");
  nav.classList.toggle("nav--mobile");
  document.body.classList.toggle("no-scroll");
  // if (nav.classList.contains("nav--mobile")) {
  //   header.style.opacity = "0.5";
  //   console.log(nav);
  //   nav.children[0].style.cssText = `opacity: 1`;
  // } else {
  //   header.style.opacity = "1";
  // }
});

// вариант 2:
// const menuBtn = document.querySelector(".nav__btn-toggle");
// menuBtn.addEventListener("click", () => {
//   document.querySelector(".menu-icon").classList.toggle("js-menu-icon-active");
// });

// вариант 3:
// document.querySelector(".nav__btn-toggle").onclick = () => {
//   document.querySelector(".menu-icon").classList.toggle("js-menu-icon-active");
// };
