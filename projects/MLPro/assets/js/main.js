$(document).ready(function () {
    // const lptext = document.querySelector('.L-P-text');
    // const lpImg = document.querySelector('.L-P-img');
    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {

    //     if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    //         lptext.style.opacity = "1";
    //             lptext.style.animation = "slide-right 0.5s 1";
    //             lptext.style.transistion = "all 0.6s";
    //     }
    //     if(document.body.scrollTop < 200 || document.documentElement.scrollTop < 200){
    //         lptext.style.animation = "none";
    //         lptext.style.opacity =  "0";
    //         lptext.style.transistion = "all 0.6s";
    //     }
    //     if(document.body.scrollTop < 650 || document.documentElement.scrollTop < 650){
    //         lptext.style.animation = "none";
    //         lptext.style.opacity =  "1";
    //         lptext.style.transistion = "all 0.6s";
    //     }
    //     if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
    //         lptext.style.animation = "none";
    //         lptext.style.opacity =  "0";
    //         lptext.style.transistion = "all 0.6s";
    //     }

    // }
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
        const opptext = isInViewport(lptext) ?
            '1' :
            '0';
        if (opptext == 1) {
            lptext.style.opacity = opptext;
            lptext.style.animation = "slide-right 0.5s 1";
            lptext.style.transistion = "all 0.6s";
        }
        else {
            lptext.style.animation = "none";
            lptext.style.opacity = opptext;
            lptext.style.transistion = "all 0.6s";

        }
        const oppImg = isInViewport(lpImg) ?
            '1' :
            '0';
        if (oppImg == 1) {
            lptext.style.opacity = oppImg;
            lptext.style.animation = "slide-right 0.5s 1";
            lptext.style.transistion = "all 0.6s";

        }

        const opp1text = isInViewport(cvtext) ?
            '1' :
            '0';
        if (opp1text == 1) {
            cvtext.style.opacity = opp1text;
            cvtext.style.transistion = "all 0.6s";

        }
        else {
            cvtext.style.opacity = opp1text;
            cvtext.style.transistion = "all 0.6s";
        }
        const opp1Img = isInViewport(cvimg) ?
            '1' :
            '0';
        if (opp1Img == 1) {
            cvtext.style.opacity = opp1Img;
            cvtext.style.transistion = "all 0.6s";
        }

        const discussText = document.querySelector('.discuss-text');
        const discussImg = document.querySelector('.discuss-img');
        const opp2text = isInViewport(discussText) ?
            '1' :
            '0';
        if (opp2text == 1) {
            discussText.style.opacity = opp2text;
            discussText.style.transistion = "all 0.6s";
        }
        else {
            discussText.style.opacity = opp2text;
            discussText.style.transistion = "all 0.6s";
        }
        const opp2Img = isInViewport(discussImg) ?
            '1' :
            '0';
        if (opp2Img == 1) {
            discussText.style.opacity = opp2Img;
            discussText.style.transistion = "all 0.6s";
        }

    }

        , {
            passive: true
        });
})


$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").css("background", "#5538a4");
            $(".navbar").css("box-shadow", "0 4px 10px rgba(0,0,0,0.2)");
        }
        else {
            $(".navbar").css("box-shadow", "none");
            if (window.innerWidth > 1200) {
                $(".navbar").css("background", "transparent");
            }
        }
    })
})
