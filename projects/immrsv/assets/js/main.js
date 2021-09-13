const defaultFaceBtn = document.querySelector("#default-face-btn");
const defaultDestBtn = document.querySelector("#default-dest-btn");

let formFilled = false;
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
