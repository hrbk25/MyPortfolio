'use strict';

// loading
const followingDot = document.getElementById('following-dot');
// console.log(followingDot);
// for(let i = 1; i<=6; i++){
  const div = document.createElement('div');
  div.className = 'dot';
  followingDot.appendChild(div);
// }

window.onload = function() {
  const loading = document.getElementById('loading');
  loading.classList.add('loaded');
}


// page-header main-img

const pageHeader = document.getElementById('page-header');
const title = document.getElementById('title');
const homeImg = document.getElementById('home-img');

createTitle();

setInterval(() => {
  title.classList.add('-visible');
}, 300);

setInterval(() => {
  pageHeader.classList.add('-delay');
  homeImg.classList.add('-delay');
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
const afterMe = document.querySelector('.after-me');
const skillsTitle = document.querySelectorAll('.skills-title');
const skillsList = document.querySelectorAll('.skills-list');

scrollDisplay(myName);
scrollDisplay(aboutP);
scrollDisplay(more);
scrollDisplay(afterMe);
scrollDisplay(skillsTitle);
scrollDisplay(skillsList);


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

  slidesPerView: 1, 

  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },

});


// scroll ナビ　自動化

const headerHeight = pageHeader.clientHeight; // headerがsection-titleと被らないように。

const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
  scorrllLink.addEventListener("click", (e) => {
    e.preventDefault();  //デフォルトのイベントをキャンセルする。
    const hrefLink = scorrllLink.getAttribute("href"); //scorrllLinkで取得したaのherf属性を取得
    const targetContent = document.getElementById(hrefLink.replace("#", ""));//#を無くして、そのidの要素を取得
    const rectTop = targetContent.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const target = rectTop + positionY - headerHeight; //header分を引く。
    console.log();
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
});
