const swiper = new Swiper('.mon-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
  },
});

button
  let button = document.getElementById("button")

  button.addEventListener("click" ,function () {
    document.body.classList.toggle("light")
  })
    

