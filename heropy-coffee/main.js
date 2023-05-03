const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//검색창 요소 클릭 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchEl.addEventListener('blur', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '');
});