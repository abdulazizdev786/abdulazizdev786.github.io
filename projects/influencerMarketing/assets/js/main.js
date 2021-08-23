let fInfBtnNext = document.getElementById("f-inf-item-next");
let fInfBtnPrev = document.getElementById("f-inf-item-prev");
let fInfItem = document.querySelector(".f-influencer-items");
let left=0;
fInfBtnNext.addEventListener('click', function(){
    if(left <= 0 && left > -200){
        console.log("move left")
    left -= 100
    }
    else{
        left = 0;
    }
    fInfItem.style.left = left+"%"
})
fInfBtnPrev.addEventListener('click', function(){
    if(left>= -200 && left !=0){
        left += 100
        console.log("move right")
    }
    else{
        left = -200
    }
    fInfItem.style.left = left+"%"
})