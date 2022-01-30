'use strict';

let slideImage = document.querySelector('.slideBox'),
  slide = document.querySelectorAll('.slideImage li'),
  currentIdx = 0,
  slideCount = slide.length,
  prevBtn = document.querySelector('.prev'),
  slideWidth = 420,
  slideMargin = 30,
  nextBtn = document.querySelector('.next');

slideImage.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num){
  slideImage.style.left = -num * 330 +'px';
  currentIdx = num;
}
nextBtn.addEventListener('click', function() {
  if(currentIdx < slideCount - 3){
    moveSlide(currentIdx + 1);
  } else{
    moveSlide(0);
  }

});

prevBtn.addEventListener('click', function() {
  if(currentIdx > 0){
    moveSlide(currentIdx - 1);
  } else{
    moveSlide(slideCount - 3);
  }

});

