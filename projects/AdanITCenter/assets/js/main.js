$(document).ready(() => {
  document.querySelector(".logo-light-con").style.display = "none";
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    document.getElementById("navbar_top").classList.add("fixed-top");
    // add padding top to show content behind navbar
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
    document.querySelector(".logo-light-con").style.display = "block";
    document.querySelector(".navbar .container-md").style.justifyContent =
      "space-between";
    document.querySelector(".navbar .navbar-nav").classList.add("ms-auto");
  } else {
    document.getElementById("navbar_top").classList.remove("fixed-top");
    // remove padding top from body
    document.body.style.paddingTop = "0";
    document.querySelector(".logo-light-con").style.display = "none";
    document.querySelector(".navbar .container-md").style.justifyContent =
      "flex-end";
    document.querySelector(".navbar .navbar-nav").classList.remove("ms-auto");
  }
});

// DOMContentLoaded  end

let minPriceVal = "";
let maxPriceVal = "";

// Range slider script
// window.addEventListener('DOMContentLoaded', () => {
// 	new dualRangeSlider(document.querySelector(".dual-range"))
// })
function rangeSlider() {
  new dualRangeSlider(document.querySelector(".dual-range"));
}
class dualRangeSlider {
  constructor(rangeElement) {
    this.range = rangeElement;
    this.min = Number(rangeElement.dataset.min);
    this.max = Number(rangeElement.dataset.max);
    this.handles = [...this.range.querySelectorAll(".handle")];
    this.startPos = 0;
    this.activeHandle;

    this.handles.forEach((handle) => {
      handle.addEventListener("mousedown", this.startMove.bind(this));
      handle.addEventListener("touchstart", this.startMoveTouch.bind(this));
    });

    window.addEventListener("mouseup", this.stopMove.bind(this));
    window.addEventListener("touchend", this.stopMove.bind(this));
    window.addEventListener("touchcancel", this.stopMove.bind(this));
    window.addEventListener("touchleave", this.stopMove.bind(this));

    const rangeRect = this.range.getBoundingClientRect();
    const handleRect = this.handles[0].getBoundingClientRect();
    this.range.style.setProperty("--x-1", "0px");
    this.range.style.setProperty(
      "--x-2",
      rangeRect.width - handleRect.width / 2 + "px"
    );
    this.handles[0].dataset.value = this.range.dataset.min;
    this.handles[1].dataset.value = this.range.dataset.max;
  }

  startMoveTouch(e) {
    const handleRect = e.target.getBoundingClientRect();
    this.startPos = e.touches[0].clientX - handleRect.x;
    this.activeHandle = e.target;
    this.moveTouchListener = this.moveTouch.bind(this);
    window.addEventListener("touchmove", this.moveTouchListener);
  }

  startMove(e) {
    this.startPos = e.offsetX;
    this.activeHandle = e.target;
    this.moveListener = this.move.bind(this);
    window.addEventListener("mousemove", this.moveListener);
  }

  moveTouch(e) {
    this.move({ clientX: e.touches[0].clientX });
  }

  move(e) {
    const isLeft = this.activeHandle.classList.contains("left");
    const property = isLeft ? "--x-1" : "--x-2";
    const parentRect = this.range.getBoundingClientRect();
    const handleRect = this.activeHandle.getBoundingClientRect();
    let newX = e.clientX - parentRect.x - this.startPos;
    if (isLeft) {
      const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
      newX = Math.min(newX, otherX - handleRect.width);
      newX = Math.max(newX, 0 - handleRect.width / 2);
    } else {
      const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
      newX = Math.max(newX, otherX + handleRect.width);
      newX = Math.min(newX, parentRect.width - handleRect.width / 2);
    }
    this.activeHandle.dataset.value = this.calcHandleValue(
      (newX + handleRect.width / 2) / parentRect.width
    );
    this.range.style.setProperty(property, newX + "px");
    if (isLeft) {
      document.querySelector(".min-price-range").innerHTML =
        this.activeHandle.dataset.value;
      minPriceVal = this.activeHandle.dataset.value;
    } else {
      document.querySelector(".max-price-range").innerHTML =
        this.activeHandle.dataset.value;
      maxPriceVal = this.activeHandle.dataset.value;
    }
  }

  calcHandleValue(percentage) {
    return Math.round(percentage * (this.max - this.min) + this.min);
  }

  stopMove() {
    window.removeEventListener("mousemove", this.moveListener);
    window.removeEventListener("touchmove", this.moveTouchListener);
  }
}
// Properties filters 
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".propertyfilter").show("1000");
    } else {
      $(".propertyfilter")
        .not("." + value)
        .hide("10000");
      $(".propertyfilter")
        .filter("." + value)
        .show("10000");
    }
  });

// Home Page projects filters 
  $(".filter-button1").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".projfilter").show("1000");
    } else {
      $(".projfilter")
        .not("." + value)
        .hide("1000");
      $(".projfilter")
        .filter("." + value)
        .show("1000");
    }
  });


// Projects Page projects filters 
	$(".proj-filter-button").click(function () {
	var value = $(this).attr("data-filter");
	if (value == "all") {
		$(".projfilter").show("1000");
	} else {
		$(".projfilter")
		.not("." + value)
		.hide("1000");
		$(".projfilter")
		.filter("." + value)
		.show("1000");
	}
	});

		
});

function carouselLoad() {
  // $(document).ready(function(){
  $(".prop-gal-crsl.owl-carousel").owlCarousel({
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
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".sim-prop-crsl.owl-carousel").owlCarousel({
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
      1000: {
        items: 3,
      },
    },
  });
  $(".lat-proj-crsl.owl-carousel").owlCarousel({
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
      1000: {
        items: 3,
      },
    },
  });
  // });
// owl carousel control buttons scripts
  var owlPropGallery = $(".prop-gal-crsl.owl-carousel");
  $(".btn-gal-crsl.btn-crsl-next").click(function () {
    owlPropGallery.trigger("next.owl.carousel");
  });
  $(".btn-gal-crsl.btn-crsl-prev").click(function () {
    owlPropGallery.trigger("prev.owl.carousel", [300]);
  });

  var owlSimProp = $(".sim-prop-crsl.owl-carousel");
  $(".btn-crsl-next").click(function () {
    owlSimProp.trigger("next.owl.carousel");
  });
  $(".btn-crsl-prev").click(function () {
    owlSimProp.trigger("prev.owl.carousel", [300]);
  });

  var owlLatProj = $(".lat-proj-crsl.owl-carousel");
  $(".btn-proj-crsl.btn-crsl-next").click(function () {
    owlLatProj.trigger("next.owl.carousel");
  });
  $(".btn-proj-crsl.btn-crsl-prev").click(function () {
    owlLatProj.trigger("prev.owl.carousel", [300]);
  });
  let crslImg = "";
	const propMainImg = document.querySelector(".prop-gallery-main .gallery-img-main img");
	// $(document).ready(function () {
	if (document.querySelector(".prop-gal-crsl .owl-item ")) {
		document.querySelectorAll(".prop-gal-crsl .owl-item ").forEach(function (el) {
			el.addEventListener("click", function (e) {
			if (e.target.parentNode.querySelector("img")) {
				const reqSrc = e.target.parentNode.querySelector("img");
				crslImg = reqSrc.getAttribute("src");
				propMainImg.src = crslImg;
			}
			});
		});
	}
	// });
}

function showMore(){
	if(!document.querySelector(".show-more-menu.collapse")){
		document.querySelector(".show-more-menu").classList.add("collapse");
		document.querySelector(".group-button-search .icon-2").style.display= "none";
		document.querySelector(".group-button-search .text-2").style.display="none";
		document.querySelector(".group-button-search .icon-1").style.display= "inline-block";
		document.querySelector(".group-button-search .text-1").style.display="inline-block";
	}
	else{
		document.querySelector(".show-more-menu").classList.remove("collapse");
		document.querySelector(".group-button-search .icon-2").style.display= "inline-block";
		document.querySelector(".group-button-search .text-2").style.display="inline-block";
		document.querySelector(".group-button-search .icon-1").style.display= "none";
		document.querySelector(".group-button-search .text-1").style.display="none";
	}
}



// like button script

document.querySelectorAll(".like-btn").forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (e.target.parentNode.querySelector("i")) {
      let likeBtn = e.target.parentNode.querySelector("i.bi");
      if (e.target.parentNode.querySelector("i.bi-heart")) {
        likeBtn.classList.add("bi-heart-fill");
        likeBtn.classList.remove("bi-heart");
      } else {
        likeBtn.classList.remove("bi-heart-fill");
        likeBtn.classList.add("bi-heart");
      }
    }
  });
});
