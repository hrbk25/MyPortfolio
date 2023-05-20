'use strict';

// main-img

const title = document.getElementById('title');
const homeImg = document.getElementById('home-img');
const pageHeader = document.getElementById('page-header');

createTitle();

setInterval(() => {
  title.classList.add('-visible');
}, 300);

setInterval(() => {
  homeImg.classList.add('-delay');
  pageHeader.classList.add('-delay');
}, 1900);

function createTitle() { //文字列を１文字ずつ配列に入れて、それをspanに入れて生成。
  const mainTitle = `Hiro's Portofolio`;
  let arrayTitle = mainTitle.split('');
    
  for(let i = 0; i < arrayTitle.length; i++) {
    let span = document.createElement('span');
    span.textContent = arrayTitle[i];
    title.appendChild(span);
  }
}


// 共通section title
const sectionTitle = document.querySelectorAll('.section-title');
scrollDisplay(sectionTitle);


// about 

// about scroll display

const myName = document.querySelector('.name');
const aboutP = document.querySelectorAll('p');
const more = document.querySelector('.more');

scrollDisplay(myName);
scrollDisplay(aboutP);
scrollDisplay(more);


function scrollDisplay(el) {
  if(el.length){ // SelectorAllは数値でtrue、Selectorはundefinedでfalse
    window.addEventListener("scroll", () => {
      for (let i = 0; i < el.length; i++){
        const rect = el[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        if (scroll > offset - windowHeight + 150) {
          el[i].classList.add('scroll-in');
        }
      }
    });
  } else {
    window.addEventListener("scroll", () => {
      const rect = el.getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; 
      if (scroll > offset - windowHeight + 150) {
        el.classList.add('scroll-in');
      }
  });
  }
}

// about swiper

let mySwiper = new Swiper ('.swiper', {
  loop: true,
  loopAdditionalSlides: 2,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 3, 
  spaceBetween: 10, 
  speed: 1500, 
  watchSlidesProgress: true,
  // effect: "fade",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },

});
