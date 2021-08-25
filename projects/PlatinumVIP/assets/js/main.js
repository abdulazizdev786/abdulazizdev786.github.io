
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
  
      if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      let typeSpeed = 70;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
      if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
  }

// carousel script 
let btnRight = document.querySelector(".btn-carousel-next");
let btnLeft = document.querySelector(".btn-carousel-prev");
let left=0;
let carousel = document.querySelector(".c-events-carousel-inner");

btnRight.addEventListener('click',function(){
  if($(window).width()> 612){
    if(left <= 0 && left > -33){
      left -= 33
      }
      else{
          left = 0;
      }
      carousel.style.left = left+"%"
  }
  else{
    if(left <= 0 && left > -300){
      left -= 100
      }
      else{
          left = 0;
      }
      carousel.style.left = left+"%"
  }
  
});
btnLeft.addEventListener('click', function(){
  if($(window).width()> 612){
    if(left>= -33 && left !=0){
      left += 33
  }
  else{
      left = 0
  }
  carousel.style.left = left+"%"
  }
  else {
    if(left>= -300 && left !=0){
      left += 100
  }
  else{
      left = 0
  }
  carousel.style.left = left+"%"
  }
 
})

setInterval(() => {
  if($(window).width()> 612){
    if(left <= 0 && left > -33){
      left -= 33
      }
      else{
          left = 0;
      }
      carousel.style.left = left+"%"
  }
  else{
    if(left <= 0 && left > -300){
      left -= 100
      }
      else{
          left = 0;
      }
      carousel.style.left = left+"%"
  }
}, 4000);
  