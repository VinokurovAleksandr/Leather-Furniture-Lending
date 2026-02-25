const featuredSwiper = new Swiper('.featured__slider', {
  slidesPerView: 2, // Кількість лого на малих екранах
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  breakpoints: {
    // Планшет
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // Десктоп
    1024: {
      slidesPerView: 6, // Показуємо всі лого в ряд
      spaceBetween: 50,
      autoplay: false, // Вимикаємо автопрокрутку
      allowTouchMove: false, // Вимикаємо свайп
    }
  }
});