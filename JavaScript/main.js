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
const afterMe = document.querySelector('.after-me');
const skillsTitle = document.querySelectorAll('.skills-title');
const skillsList = document.querySelectorAll('.skills-list');

scrollDisplay(myName);
scrollDisplay(aboutP);
scrollDisplay(more);
scrollDisplay(afterMe);
scrollDisplay(skillsTitle);
scrollDisplay(skillsList);


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
