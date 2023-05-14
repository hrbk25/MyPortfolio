'use strict';

// main-img

const title = document.getElementById('title');

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

