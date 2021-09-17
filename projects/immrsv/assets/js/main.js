const sourceFace = document.querySelector(".source-face-img");
const destFace = document.querySelector(".dest-face-img");

const defaultFaceBtn = document.querySelector("#default-face-btn");
const customFaceBtn = document.querySelector("#custom-face-file-btn");

const defaultDestBtn = document.querySelector("#default-dest-btn");
const customDestBtn = document.querySelector("#custom-dest-file-btn");

const defaultFullImgBtn = document.querySelector("#default-full-img-btn");
const customFullImgBtn = document.querySelector("#custom-full-file-btn");

const defaultDressBtn = document.querySelector("#default-dress-btn");
const customDressBtn = document.querySelector("#custom-dress-file-btn");

const faceResItem = document.querySelector(".face-sec-res-item .item-img")

let uploadedSourceFace= "";
// let uploadedDestFace= "";
let uploadedFullImg= "";
// let uploadedDressImg="";

const mergeFaceBtn = document.getElementById("mergeFaceBtn");
const mergeDressBtn = document.getElementById("mergeDressBtn");

mergeFaceBtn.addEventListener("click", function(){
  
  if(hasFile(defaultFaceBtn)){
    // console.log("File Uploaded")
    // Call the Algoritham Api here to send and receive the Face files 
    // 
    // 

  }
  else{
    if(document.querySelector("#source-face-1").checked){
      if(document.querySelector("#dest-face-1").checked){
        faceResItem.style.backgroundImage = "url(./assets/images/rslt1.png)"
      }
      else if(document.querySelector("#dest-face-2").checked){
        faceResItem.style.backgroundImage = "url(./assets/images/rslt4.png)"
      }
    }
    if(document.querySelector("#source-face-2").checked){
      if(document.querySelector("#dest-face-1").checked){
        faceResItem.style.backgroundImage = "url(./assets/images/rslt2.png)"
      }
      else if(document.querySelector("#dest-face-2").checked){
        faceResItem.style.backgroundImage = "url(./assets/images/rslt5.png)"
      }
    }
    if(document.querySelector("#source-face-3").checked){
      if(document.querySelector("#dest-face-1").checked){
        faceResItem.style.backgroundImage = "url(./assets/images/rslt3.png)"
      }
      else if(document.querySelector("#dest-face-2").checked){
        faceResItem.style.backgroundImage = "url(./assets/images/rslt6.png)"
      }
    }
    
  }
});
mergeDressBtn.addEventListener("click", function(){
  if(hasFile(defaultFullImgBtn)){
    // console.log("File Uploaded")
    // Call the Algoritham Api here to send and receive the Dress files 
    //


  }
});

function hasFile(e){
  const file =e.files[0];
  if (file) {
    return true;
    }else{
      return false;
    }
}
$(document).ready(function () {
  $('#questModal').modal({
         backdrop: 'static',
         keyboard: false
  })
 });
 function changeOpacity(className) {
  var elems = document.querySelectorAll(className);
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style.transition = "opacity 0.5s linear 0s";
      elems[index].style.opacity = 1;
  }
}

let formFilled = false;
$(document).ready(function () {
  formFilled = getWithExpiry("formFilled");
  if(formFilled){
    changeOpacity(".custom-file-btn")
  }
})

function setFormStatus(){
  if(!document.querySelector('.btn.btn-primary.ff-submit')){
      formFilled= true;
      setWithExpiry("formFilled", true, 3600000);
      changeOpacity(".custom-file-btn")
  }
}
function setWithExpiry(key, value, ttl) {
  const now = new Date()
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}
function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key)
    return null
  }
  return item.value
}


function defaultFaceBtnActive() {
  if(formFilled){
    defaultFaceBtn.click();
  }
  else{
    alert("Please fill the form first")
  }
}

function defaultDestBtnActive() {
  if(formFilled){
    defaultDestBtn.click();
  }
  else{
    alert("Please fill the form first")
  }
}
function defaultFullImgBtnActive() {
  if(formFilled){
    defaultFullImgBtn.click();
  }
  else{
    alert("Please fill the form first")
  }
}
function defaultDressBtnActive() {
  if(formFilled){
    defaultDressBtn.click();
  }
  else{
    alert("Please fill the form first")
  }
}

defaultFaceBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      uploadedSourceFace = reader.result;
      sourceFace.style.backgroundImage = "url("+ uploadedSourceFace+")";
    };
    reader.readAsDataURL(file);
  }
});



// defaultDestBtn.addEventListener("change", function () {
//   const file = this.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function () {
//       uploadedDestFace = reader.result;
//       destFace.style.backgroundImage = "url("+uploadedDestFace+")";
//     };
//     reader.readAsDataURL(file);
//   }
// });
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
        srcFaceImg.style.backgroundImage = "url("+srcFaceItem+")";
        removeFile(defaultFaceBtn);
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
        destFaceImg.style.backgroundImage = "url("+destFaceItem+")";
        // removeFile(defaultDestBtn);
      }
      else {
        destFaceImg.style.background = 'white';
      }
    });
   });
}
  
});


const fullImg = document.querySelector(".full-img");
const dressImg = document.querySelector(".dress-img");
let fullImgItem = "";
let dressImgItem ="";
$(document).ready(function() { 
if (document.querySelector('.full-item-img.item-img')) {
  document.querySelectorAll('.full-item-img.item-img').forEach(function(el) {
    el.addEventListener('click', function (e) {
      if (e.target.parentNode.querySelector('.req-item-img')) {
        const reqSrc = e.target.parentNode.querySelector('.req-item-img');
        fullImgItem = reqSrc.getAttribute('src');
        fullImg.style.backgroundImage = "url("+fullImgItem+")";
        removeFile(defaultFullImgBtn);
      }
      else {
        fullImgItem.style.background = 'white';
      }
    });
   });
}

if (document.querySelector('.dress-item-img.item-img')) {
  document.querySelectorAll('.dress-item-img.item-img').forEach(function(el) {
    el.addEventListener('click', function (e) {
      if (e.target.parentNode.querySelector('.req-item-img')) {
        const reqSrc = e.target.parentNode.querySelector('.req-item-img');
        dressImgItem = reqSrc.getAttribute('src');
        dressImg.style.backgroundImage = "url("+dressImgItem+")"
        // removeFile(defaultDressBtn);
      }
      else {
        dressImg.style.background = 'white';
      }
    });
   });
}
  
});

defaultFullImgBtn.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(){
      uploadedFullImg = reader.result;
      fullImg.style.backgroundImage="url("+uploadedFullImg+")"
    }
    reader.readAsDataURL(file);
  }
});
// defaultDressBtn.addEventListener("change", function(){
//   const file = this.files[0];
//   if(file){
//     const reader = new FileReader();
//     reader.onload = function(){
//       uploadedDressImg = reader.result;
//       dressImg.style.backgroundImage="url("+uploadedDressImg+")"
//     }
//     reader.readAsDataURL(file);
//   }
// });


function removeFile(f){
  if(f.value){
      try{
          f.value = ''; 
      }catch(err){ }
      if(f.value){
          var form = document.createElement('form'),
              parentNode = f.parentNode, ref = f.nextSibling;
          form.appendChild(f);
          form.reset();
          parentNode.insertBefore(f,ref);
      }
  }
}