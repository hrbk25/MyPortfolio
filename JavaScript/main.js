'use strict';

// common
import {loading, ScrollSectionTitle ,scrollDisplay} from './common.js';
loading();
ScrollSectionTitle();


// section title
import { sectionTitle } from './common.js';
scrollDisplay(sectionTitle);


// hedder
import {createTitle, setIntervalHedderMotion, toggleHumMenu} from './header.js'

// →page-header main-img
const titleTop = document.getElementById('title-top');
const titleBottom = document.getElementById('title-bottom');
createTitle(`Hiro's`, titleTop, 300);
createTitle(`Portofolio`, titleBottom, 900);
const pageHeader = document.getElementById('page-header');
const homeImg = document.getElementById('home-img');
setIntervalHedderMotion(pageHeader, homeImg);

// →hamburger
toggleHumMenu();


// about
const aboutImg = document.getElementById('about-img');
const myName = document.querySelector('.name');
const aboutP = document.querySelectorAll('p');
const more = document.querySelector('.more');
scrollDisplay(aboutImg);
scrollDisplay(myName);
scrollDisplay(aboutP);
scrollDisplay(more);

// about swiper
let mySwiper = new Swiper ('.swiper', {
  loop: true,
  loopAdditionalSlides: 2,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 10, 
  speed: 1500, 
  watchSlidesProgress: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },
  slidesPerView: 2, 
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
  },
});

// skills
const beforeMe = document.querySelector('.before-me');
const skillsTitle = document.querySelectorAll('.skills-title');
const skillsList = document.querySelectorAll('.skills-list');
scrollDisplay(beforeMe);
scrollDisplay(skillsTitle);
scrollDisplay(skillsList);

// スクロールしたら画面が横に推移する挙動
window.addEventListener("load", function(){
  gsap.registerPlugin(ScrollTrigger); //プラグインを定義
  const area  = document.querySelector(".area");
  const box  = document.querySelector(".study-box");
  const items = document.querySelectorAll(".item");
  const num   = items.length;
  
  gsap.set(box,  { width: num * 100 + "%" });//横幅を指定
  gsap.set(items, { width: 100 / num + "%" });//横幅を指定
  gsap.to(items, {
    xPercent: -100 * ( num - 1 ), //x方向に移動させる
    ease: "none",
    scrollTrigger: {
      trigger: area,
      start: "top top",
      end: "+=1000", 
      pin: true,
      scrub: true, 
    }
  });
  });