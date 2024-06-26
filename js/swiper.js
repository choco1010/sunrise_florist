document.addEventListener('DOMContentLoaded', (event) => {
  // bannerSwiper
  let swiper = new Swiper("#bannerSwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, 
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
  });
  

  function resetAutoplay() {
    swiper.autoplay.stop();
    swiper.autoplay.start();
  }
  
  swiper.on('slideChange', function () {
    resetAutoplay();
  });
 
});

