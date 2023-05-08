/*검색창 제어*/
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


/*페이지 스크롤에 따른 요소 제어 */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {

  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});


/*순서대로 나타나는 기능*/

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


/* 슬라이드 요소 관리 */
new Swiper('.notice .swiper', {
  direction: 'vertical', 
  autoplay: true,
  loop: true 
});
new Swiper('.promotion .swiper', {
  autoplay: { 
    delay: 5000 
  },
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 10, 
  centeredSlides: true, 
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5, 
  navigation: { 
    prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
  }
});


/*Promotion 슬라이드 토글 기능*/
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});


/* 부유 요소 관리*/
gsap.to('.floating1', 1.5, {
  delay: 1, 
  y: 15, 
  repeat: -1, 
  yoyo: true, 
  ease: Power1.easeInOut 
});
gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});


/* 요소가 화면에 보여짐 여부에 따른 요소 관리*/
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl,
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller());
});


/*올해가 몇 년도인지 계산*/
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
