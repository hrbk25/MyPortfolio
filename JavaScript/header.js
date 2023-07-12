
// main

export function createTitle(title, mainTitle, sec_ms) { //文字列を１文字ずつ配列に入れて、それをspanに入れて生成。
  const mainTitle1 = title;
  let arrayTitle = mainTitle1.split('');
    
  for(let i = 0; i < arrayTitle.length; i++) {
    let span = document.createElement('span');
    span.textContent = arrayTitle[i];
    mainTitle.appendChild(span);
  }

  setInterval(() => {
    mainTitle.classList.add('-visible');
  }, sec_ms);

}

// header

export function setIntervalHedderMotion(header, behavior) {  
  setInterval(() => {
    header.classList.add('-delay');
    behavior.classList.add('-delay');
  }, 1900);
}


// hamburger

const ham = document.querySelector('#js-hamburger'); 
const nav = document.querySelector('#js-nav'); 
const navLists = document.querySelectorAll('.nav-lists');


export function toggleHumMenu() {
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
}
