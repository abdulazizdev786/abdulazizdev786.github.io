$(document).ready(function(){
    $(".show-case-crsl.owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 3,
        },
        },
    });
    var showCaseCrsl = $(".show-case-crsl.owl-carousel");
    $(".crsl-btn.btn-next").click(function () {
        showCaseCrsl.trigger("next.owl.carousel");
    });
    $(".crsl-btn.btn-prev").click(function () {
        showCaseCrsl.trigger("prev.owl.carousel", [300]);
    });

    window.addEventListener("scroll", function () {
        if(document.querySelector(".navbar")){
        if (window.scrollY > 200) {
            document.querySelector(".navbar").classList.add("navbar-bg");
            
        } else {
            document.querySelector(".navbar").classList.remove("navbar-bg");
        }
        }
    });
    $(".header-input").hide();
    $(".header-btn.btn.mint-btn").on("click", ()=>{
        $(".header-input").show();
    })
})

