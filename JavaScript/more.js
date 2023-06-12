'use strict';

// loading

const following = document.getElementById('following');
// console.log(followingDot);
// for(let i = 1; i<=6; i++){
  const div = document.createElement('div');
  div.className = 'dot';
  following.appendChild(div);
// }

window.onload = function() {
  const load = document.getElementById('load');
  load.classList.add('loaded');
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

// hamburger

const ham = document.querySelector('#js-hamburger'); 
const nav = document.querySelector('#js-nav'); 
const navLists = document.querySelectorAll('.nav-lists');

navLists.forEach((navList) => {
  navList.addEventListener('click', () => {
    ham.classList.toggle('active'); 
    nav.classList.toggle('active'); 
  })
});

ham.addEventListener('click', () => {
  ham.classList.toggle('active'); 
  nav.classList.toggle('active'); 
});




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
// scrollDisplay(afterMe);
// scrollDisplay(skillsTitle);
// scrollDisplay(skillsList);


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


// Career

const point = document.querySelectorAll('.point');
const aaa = point.forEach( el => {
  console.log(el);
  el.addEventListener('click', () => {
    el.classList.toggle('-active');
    // e.currentTarget.classList.add('-active');
    // console.log(e.currentTarget);
  })
});


// $target = $('.point');
// $target.on('click', e=> {
//   $target.removeClass('-active');
//   $(e.currentTarget).addClass('-active');
// });