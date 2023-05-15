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
  slidesPerView: 1, 
  spaceBetween: 0, 
  centeredSlides: true,
  loop: true,
  speed: 4000, 
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination', 
    type: 'bullets', 
    clickable: true, 
  },

  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },

});
