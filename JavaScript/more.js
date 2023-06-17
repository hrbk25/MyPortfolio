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

scrollDisplay(myName);
scrollDisplay(aboutP);


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


//着火点になる要素
const fadeInLine = document.querySelectorAll(".yellow_circle_line");
 
//オプションの設定
const options = {
    rootMargin: '0px',//着火点になる要素の余白を設定できる
    threshold: 0, //着火点になる要素がどのくらいの表示割合で、表示されるかの割合を設定できる
};

//intersection observer apiを呼び出す
const observer = new IntersectionObserver(showElement, options);



//.fadeIn_lineクラスに到達したらintersection observer apiを実行する
fadeInLine.forEach((fadeInLine) => {
    observer.observe(fadeInLine);
});

//要素が表示した後の処理
function showElement(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add("active");
        }
    });
}



const point = document.querySelectorAll('.point');
const pointLine = document.querySelectorAll('.point-line');
// const text = document.querySelectorAll('.text');

scrollDisplay(point);
scrollDisplay(pointLine);
// scrollDisplay(text);

// const aaa = point.forEach( el => {
//   console.log(el);
//   el.addEventListener('click', () => {
//     el.classList.toggle('-active');
//     // e.currentTarget.classList.add('-active');
//     // console.log(e.currentTarget);
//   })
// });