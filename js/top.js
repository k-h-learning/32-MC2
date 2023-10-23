'use strict';

// top slider
window.addEventListener('load', function () {
  sliderStart();
});
function sliderStart() {
  const slide = document.getElementById('js-slide');
  const slideItem = slide.querySelectorAll('.slide_item');
  const totalNum = slideItem.length - 1;
  const FadeTime = 2000;
  const IntervalTime = 5000;
  let actNum = 0;
  let nowSlide;
  let nextSlide;

  slideItem[0].classList.add('show', 'zoom');

  setInterval(() => {
    if (actNum < totalNum) {
      let nowSlide = slideItem[actNum];
      let nextSlide = slideItem[++actNum];

      nowSlide.classList.remove('show');
      nextSlide.classList.add('show', 'zoom');
      setTimeout(() => {
        nowSlide.classList.remove('zoom');
      }, FadeTime);
    } else {
      let nowSlide = slideItem[actNum];
      let nextSlide = slideItem[actNum = 0];

      nowSlide.classList.remove('show');
      nextSlide.classList.add('show', 'zoom');

      setTimeout(() => {
        nowSlide.classList.remove('zoom');
      }, FadeTime);
    };
  }, IntervalTime);
}

