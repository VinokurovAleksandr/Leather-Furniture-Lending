
const partnerSwiper = new Swiper('.partner__img', {
  slidesPerView: 2, 
  spaceBetween: 20,
  loop: true, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
  
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
   
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
      autoplay: false, 
      allowTouchMove: false, 
    }
  }
});