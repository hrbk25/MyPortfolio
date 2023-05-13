'use strict';

function dilayTitle() {
  const title = document.getElementById('title');
  title.innerHTML  = "Hiro's Portofolio";
  console.log(title);
}

setTimeout(dilayTitle, 1000);

