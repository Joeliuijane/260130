(function(){
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('siteNav');
  const spacer = document.getElementById('nav-spacer');
  if(!header || !nav || !spacer) return;

  const THRESHOLD = 50; // 往下 50px 才顯示

  function setSpacer(){
    if(header.classList.contains('visible')){
      spacer.style.height = nav.offsetHeight + 'px';
    } else {
      spacer.style.height = '0px';
    }
  }

  function onScroll(){
    const y = window.scrollY || window.pageYOffset;
    if(y > THRESHOLD){
      header.classList.remove('hidden');
      header.classList.add('visible');
      nav.classList.add('nav-sticky'); // 保留你原 sticky
    } else {
      header.classList.add('hidden');
      header.classList.remove('visible');
      nav.classList.remove('nav-sticky');
    }
    setSpacer();
  }

  // 初始化
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', setSpacer);
})();


$(document).ready(function () {
  function toggleNavbarMethod() {
    if ($(window).width() > 992) {
      $('.navbar .dropdown').off('mouseenter mouseleave');

      $('.navbar .dropdown').on('mouseenter', function () {
        $(this).addClass('show');
        $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
        $(this).find('.dropdown-menu').addClass('show');
      });

      $('.navbar .dropdown').on('mouseleave', function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
        $(this).find('.dropdown-menu').removeClass('show');
      });

    } else {
      // 手機就交給 Bootstrap 點擊展開
      $('.navbar .dropdown').off('mouseenter mouseleave');
    }
  }

  toggleNavbarMethod();
  $(window).resize(toggleNavbarMethod);
});


















// ✅ 強制關掉 Pre Loader（避免一直轉圈圈）
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.remove("show");
});




// ====== 你只需要改這個陣列：圖片/標題/日期/摘要/連結 ======
const POSTS = [
  {
    title: "一畝田裡的時光足跡",
    date: "2025.12.07",
    tag: "關於蔡金松",
    excerpt: "果園裡的童年記憶，從灌溉到除草的第一手經驗。",
    image: "img/post1.jpg",
    href: "post1.html"
  },
  {
    title: "務農的挑戰",
    date: "2025.12.01",
    tag: "關於蔡金松",
    excerpt: "面對氣候與病蟲害，如何在土地中堅持。",
    image: "img/post2.jpg",
    href: "post2.html"
  },
  {
    title: "土地的傳承與心願",
    date: "2025.11.20",
    tag: "關於蔡金松",
    excerpt: "在土地與未來之間的抉擇。",
    image: "img/post3.jpg",
    href: "post3.html"
  },
  {
    title: "果園轉作的時代見證",
    date: "2025.11.10",
    tag: "芒果的開始",
    excerpt: "從柳丁到芒果。",
    image: "img/post4.jpg",
    href: "post4.html"
  },
  {
    title: "在變遷中長大",
    date: "2025.10.28",
    tag: "玉井的變化",
    excerpt: "果園裡的日常。",
    image: "img/post5.jpg",
    href: "post5.html"
  },
 {
    title: "歲月中的守護者",
    date: "2025.10.28",
    tag: "關於吳榮秀",
    excerpt: "果園裡的日常。",
    image: "img/post5.jpg",
    href: "post6.html"
  },
 {
    title: "芒果香裡的生活",
    date: "2025.10.28",
    tag: "關於吳榮秀",
    excerpt: "果園裡的日常。",
    image: "img/post5.jpg",
    href: "post7.html"
  },
 {
    title: "家庭與傳承",
    date: "2025.10.28",
    tag: "關於吳榮秀",
    excerpt: "果園裡的日常。",
    image: "img/post5.jpg",
    href: "post8.html"
  }
];

function createCard(post) {
  const card = document.createElement("article");
  card.className = "hp-card";
  card.tabIndex = 0;               // 讓卡片可被鍵盤選到
  card.setAttribute("role", "link");
  card.setAttribute("aria-label", `${post.title}，前往文章頁`);

  card.innerHTML = `
    <div class="hp-media">
      <img src="${post.image}" alt="${post.title}">
    </div>

    <div class="hp-body">
      <div class="hp-meta">
        <div class="hp-date">${post.date}</div>
        <div class="hp-pill">${post.tag}</div>
      </div>

      <div class="hp-title-row">
        <h2 class="hp-h2">${post.title}</h2>
        <div class="hp-arrow">→</div>
      </div>

      <p class="hp-excerpt">${post.excerpt}</p>
    </div>
  `;

  const go = () => window.location.href = post.href;

  // 滑鼠點擊
  card.addEventListener("click", go);

  // 鍵盤 Enter / Space
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  });

  return card;
}

function renderHomePosts() {
  const list = document.getElementById("hpList");
  if (!list) return;

  list.innerHTML = "";
  POSTS.forEach(p => list.appendChild(createCard(p)));
}

document.addEventListener("DOMContentLoaded", renderHomePosts);
