let fInfBtnNext = document.getElementById("f-inf-item-next");
let fInfBtnPrev = document.getElementById("f-inf-item-prev");
let fInfItem = document.querySelector(".f-influencer-items");
let left=0;
fInfBtnNext.addEventListener('click', function(){
    if(left <= 0 && left > -200){
    left -= 100;
    }
    else{
        left = 0;
    }
   
    fInfItem.style.left = left+"%";
    fInfItem.style.transition = "all 0.3s ease";
})
fInfBtnPrev.addEventListener('click', function(){
    if(left>= -200 && left !=0){
        left += 100
    }
    else{
        left = -200
    }
    fInfItem.style.left = left+"%";
    fInfItem.style.transition = "all 0.3s ease";
})


$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(document).ready(function () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$(".navbar").addClass("fixed-nav");
	} else {
		$(".navbar").removeClass("fixed-nav");
	}
});

$(document).scroll(function () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$(".navbar").addClass("fixed-nav");
	} else {
		$(".navbar").removeClass("fixed-nav");
	}
});



