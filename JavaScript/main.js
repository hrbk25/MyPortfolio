'use strict';

// main-img

const title = document.getElementById('title');
const homeImg = document.getElementById('home-img');
const pageHeader = document.getElementById('page-header');

console.log(homeImg);

createTitle();

setInterval(() => {
  title.classList.add('-visible');
}, 300);

setInterval(() => {
  homeImg.classList.add('-delay');
  pageHeader.classList.add('-delay');
}, 1900);

function createTitle() {
  const mainTitle = `Hiro's Portofolio`;

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
  loopAdditionalSlides: 2,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 3, 
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
