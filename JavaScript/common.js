

// loading

export function loading() {
  const followingDot = document.getElementById('following-dot');
    const div = document.createElement('div');
    div.className = 'dot';
    followingDot.appendChild(div);
  
  window.onload = function() {
    const loading = document.getElementById('loading');
    loading.classList.add('loaded');
  }
}


// main more

export function scrollDisplay(el) {
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


// scroll ナビ　自動化

const pageHeader = document.getElementById('page-header');
const headerHeight = pageHeader.clientHeight; // headerがsection-titleと被らないように。
const scorollLinks = document.querySelectorAll('a[href^="#"]');

export function ScrollSectionTitle() {
  scorollLinks.forEach((scorollLink) => {
    scorollLink.addEventListener("click", (e) => {
      e.preventDefault();  //デフォルトのイベントをキャンセルする。
      const hrefLink = scorollLink.getAttribute("href"); //scorollLinkで取得したaのherf属性を取得
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
}