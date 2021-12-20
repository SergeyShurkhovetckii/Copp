import Swiper from 'swiper';

var swiper = new Swiper(".main-swiper", {
    slidesPerView: 1,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".main-swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
