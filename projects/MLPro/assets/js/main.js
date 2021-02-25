$(document).ready(function () {
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }
    const lptext = document.querySelector('.L-P-text');
    const lpImg = document.querySelector('.L-P-img');

    const cvtext = document.querySelector('.code-verification-text');
    const cvimg = document.querySelector('.code-verification-img');

    document.addEventListener('scroll', function () {
        const opp = isInViewport(lpImg) ?
            '1' :
            '0';
        if (opp == 1) {
            lptext.style.opacity = opp;
            lptext.style.animation = "slide-right 0.5s 1";
            lptext.style.transistion = "all 0.6s";
            lpImg.style.opacity = opp;
            lpImg.style.transistion = "all 0.6s";

        }
        else {
            lptext.style.animation = "none";
            lptext.style.opacity = opp;
            lpImg.style.opacity = opp;
            lptext.style.transistion = "all 0.6s";
            lpImg.style.transistion = "all 0.6s";

        }
        const opp1 = isInViewport(cvimg) ?
            '1' :
            '0';
        if (opp1 == 1) {
            cvtext.style.opacity = opp1;
            cvtext.style.transistion = "all 0.6s";

        }
        else {
            cvtext.style.opacity = opp1;
            cvtext.style.transistion = "all 0.6s";
        }
        const discussText = document.querySelector('.discuss-text');
         const discussImg = document.querySelector('.discuss-img');
        const opp2 = isInViewport(discussImg) ?
            '1' :
            '0';
        if (opp2 == 1) {
            discussText.style.opacity = opp2;
            discussText.style.transistion = "all 0.6s";

        }
        else {
            discussText.style.opacity = opp2;
            discussText.style.transistion = "all 0.6s";
        }
    }

        , {
            passive: true
        });
})


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300 ) {
          $(".navbar").css("background" , "#5538a4");
          $(".navbar").css("box-shadow" , "0 4px 10px rgba(0,0,0,0.2)");
        }
        else{
            $(".navbar").css("box-shadow" , "none");
            if(window.innerWidth>1200){
                $(".navbar").css("background" , "transparent");
            }
        }
    })
  })
