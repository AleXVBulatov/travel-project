$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3, // показывать 3 слайда
  margin: 30,
  loop: true, // бесконечная прокрутка по кругу
  center: true,
  startPosition: 1, // чтобы слайдер начинался с первой позиции (2-ая картинка)
  // autoWidth: true, // чтобы размеры картинок были как указаны у меня
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
