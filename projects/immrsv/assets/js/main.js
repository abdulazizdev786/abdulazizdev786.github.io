const sourceFace = document.querySelector(".source-face-img");
const destFace = document.querySelector(".dest-face-img");
const defaultFaceBtn = document.querySelector("#default-face-btn");
const defaultDestBtn = document.querySelector("#default-dest-btn");
const customFaceBtn = document.querySelector("#custom-face-file-btn");
const customDestBtn = document.querySelector("#custom-dest-file-btn");
function defaultFaceBtnActive() {
  defaultFaceBtn.click();
}
function defaultDestBtnActive() {
  defaultDestBtn.click();
}
defaultFaceBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const srcFaceFile = reader.result;
      sourceFace.style.backgroundImage = "url("+srcFaceFile+")";
      // sourceFace.classList.add("active");
    };
    reader.readAsDataURL(file);
  }
});
defaultDestBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const srcFaceFile = reader.result;
      destFace.style.backgroundImage = "url("+srcFaceFile+")";
    };
    reader.readAsDataURL(file);
  }
});

const srcFaceImg = document.querySelector(".source-face-img");
const destFaceImg = document.querySelector(".dest-face-img");
let srcFaceItem = "";
let destFaceItem ="";
$(document).ready(function() { 
if (document.querySelector('.sf-item-img.item-img')) {
  document.querySelectorAll('.sf-item-img.item-img').forEach(function(el) {
    el.addEventListener('click', function (e) {
      if (e.target.parentNode.querySelector('.req-item-img')) {
        const reqSrc = e.target.parentNode.querySelector('.req-item-img');
        srcFaceItem = reqSrc.getAttribute('src');
        srcFaceImg.style.backgroundImage = "url("+srcFaceItem+")"
      }
      else {
        srcFaceImg.style.background = 'white';
      }
    });
   });
}
if (document.querySelector('.df-item-img.item-img')) {
  document.querySelectorAll('.df-item-img.item-img').forEach(function(el) {
    el.addEventListener('click', function (e) {
      if (e.target.parentNode.querySelector('.req-item-img')) {
        const reqSrc = e.target.parentNode.querySelector('.req-item-img');
        destFaceItem = reqSrc.getAttribute('src');
        destFaceImg.style.backgroundImage = "url("+destFaceItem+")"
      }
      else {
        destFaceImg.style.background = 'white';
      }
    });
   });
}
  
});