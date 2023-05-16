'use strict';

// main-img

const title = document.getElementById('title');
const homeImg = document.getElementById('home-img');

createTitle();

setInterval(() => {
  title.classList.add('-visible');
}, 500);

function createTitle() {
  const mainTitle = "Hiro's Portofolio";

  let arrayTitle = mainTitle.split('');
  console.log(arrayTitle);
    
  for(let i = 0; i < arrayTitle.length; i++) {
    let span = document.createElement('span');
    span.textContent = arrayTitle[i];
    title.appendChild(span);
  }
}

// about 
// swiper

let mySwiper = new Swiper ('.swiper', {
  loop: true,
  loopAdditionalSlides: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 2, 
  spaceBetween: 10, 
  speed: 2000, 
  watchSlidesProgress: true,
  // effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // pagination: {
  //   el: '.swiper-pagination', 
  //   type: 'bullets', 
  //   clickable: true, 
  // },

  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },

});
