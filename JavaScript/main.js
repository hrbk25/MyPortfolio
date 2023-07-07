'use strict';

// common

import {loading, ScrollSectionTitle ,scrollDisplay} from './common.js';

loading();

ScrollSectionTitle();

// 共通section title
const sectionTitle = document.querySelectorAll('.section-title');
scrollDisplay(sectionTitle);


// hedder

import {createTitle, setIntervalHedderMotion, toggleHumMenu} from './header.js'

// →page-header main-img

const title = document.getElementById('title');
createTitle(`Hiro's Portofolio`, title);

const pageHeader = document.getElementById('page-header');
const homeImg = document.getElementById('home-img');

setIntervalHedderMotion(title, pageHeader, homeImg);

// →hamburger

toggleHumMenu();



// about

const myName = document.querySelector('.name');
const aboutP = document.querySelectorAll('p');
const more = document.querySelector('.more');


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
  // effect: "fade",

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

// const afterMe = document.querySelector('.after-me');
const skillsTitle = document.querySelectorAll('.skills-title');
const skillsList = document.querySelectorAll('.skills-list');


// scrollDisplay(afterMe);
scrollDisplay(skillsTitle);
scrollDisplay(skillsList);

window.addEventListener("load", function(){

  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);
  
  const area  = document.querySelector(".area");
  const wrap  = document.querySelector(".study-box");
  const items = document.querySelectorAll(".item");
  const num   = items.length;
  
  gsap.set(wrap,  { width: num * 100 + "%" });//横幅を指定
  gsap.set(items, { width: 100 / num + "%" });//横幅を指定
  
  gsap.to(items, {
    xPercent: -100 * ( num - 1 ), //x方向に移動させる
    ease: "none",
    scrollTrigger: {
      trigger: area, //トリガー
      start: "top top", //開始位置
      end: "+=1000", //終了位置 スクロール量の幅調整
      pin: true, //ピン留め
      scrub: true, //スクロール量に応じて動かす
    }
  });
  });