let fInfBtnNext = document.getElementById("f-inf-item-next");
let fInfBtnPrev = document.getElementById("f-inf-item-prev");
let fInfItem = document.querySelector(".f-influencer-items");
let left=0;
fInfBtnNext.addEventListener('click', function(){
    if(left <= 0 && left > -194.8){
    left -= 97.4;
    }
    else{
        left = 0;
    }
   
    fInfItem.style.left = left+"%";
    fInfItem.style.transition = "all 0.3s ease";
})
fInfBtnPrev.addEventListener('click', function(){
    if(left>= -195.8 && left !=0){
        left += 97.4
    }
    else{
        left = -194.8
    }
    fInfItem.style.left = left+"%";
    fInfItem.style.transition = "all 0.3s ease";
})