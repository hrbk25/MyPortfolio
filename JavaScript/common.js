// loading
// 読み込み中に球体が回転する挙動。
export function loading() {
  const following = document.getElementById('following');
    const div = document.createElement('div');
    div.className = 'dot';
    following.appendChild(div);
  
  window.onload = function() {
    const loading = document.getElementById('loading');
    loading.classList.add('loaded');
  }
}


// section title
export const sectionTitle = document.querySelectorAll('.section-title');


// main more
export function scrollDisplay(el) {
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight; 
  window.addEventListener("scroll", () => {
  if(el.length){ // SelectorAllは数値でtrue、Selectorはundefinedでfalse
      for (let i = 0; i < el.length; i++){
        const rect = el[i].getBoundingClientRect().top;
        const offset = rect + scroll;
        if (scroll > offset - windowHeight + 150) {
          el[i].classList.add('scroll-in');
        }
      }
  } else {
      const rect = el.getBoundingClientRect().top;
      const offset = rect + scroll;
      if (scroll > offset - windowHeight + 150) {
        el.classList.add('scroll-in');
      }
    }
  });
}


// scroll ナビ 自動化
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
