var headerMenuIcon = document.getElementById("header-menu-icon");
var nav = document.getElementById("nav");
new fullpage("#fullpage", {
	anchors: [
		"Home",
		"Services",
		"Why-Us",
		"About-Us",
		"Our-Customers",
		"Packages",
		"Our-Data",
		"Contact-Us",
	],
	css3: true,
	autoScrolling: true,
	scrollingSpeed: 2200,
	controlArrows: false,
	navigation: true,
	onLeave: (origin, destination, direction) => {
		const section = destination.item;
		fullpage_api.setLockAnchors(false);
		const title = section.querySelectorAll("h1");
		const card = section.querySelectorAll(".service-card");
		const wucard = section.querySelectorAll(".whyus-card");
		const aboutPic = section.querySelectorAll(".about-img");
		const headerMenuIcon = document.getElementById("header-menu-icon");
		const nav = document.getElementById("nav");
		console.clear();

		if (destination.index === 0) {
			fullpage_api.setLockAnchors(true);
			setclass1();
			gsap.fromTo(title, { duration: 2, x: -700 }, { x: 0 });
			if (window.innerWidth < 500) {
				nav.style.opacity = "1";
			} else {
				nav.style.opacity = "0";
				headerMenuIcon.style.display = "block";
			}
		}
		if (destination.index === 1) {
			fullpage_api.setLockAnchors(true);
			setclass2();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
		if (destination.index === 2) {
			fullpage_api.setLockAnchors(true);
			setclass3();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
		if (destination.index === 3) {
			fullpage_api.setLockAnchors(true);
			setclass4();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			gsap.fromTo(aboutPic, { duration: 4, x: 400, y: 0 }, { x: 0, y: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
		if (destination.index === 4) {
			fullpage_api.setLockAnchors(true);
			setclass5();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
		if (destination.index === 5) {
			fullpage_api.setLockAnchors(true);
			setclass6();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
		if (destination.index === 6) {
			fullpage_api.setLockAnchors(true);
			setclass7();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
		if (destination.index === 7) {
			fullpage_api.setLockAnchors(true);
			setclass8();
			gsap.fromTo(title, { duration: 2, x: -500 }, { x: 0 });
			headerMenuIcon.style.display = "none";
			nav.style.opacity = "1";
		}
	},
});

$(document).ready(function () {
	checkBrowser();
	if (window.innerWidth < 500) {
		nav.style.opacity = "1";
		headerMenuBtn.style.display = "none";
		logoRed.style.opacity = "0";
		logoWhite.style.opacity = "1";
	} else {
		nav.style.opacity = "0";
		headerMenuBtn.style.display = "block";
		logoRed.style.opacity = "1";
	}
});
var headerDetailsCon = document.getElementById("header-details-con");
var headerImg = document.getElementById("header-img");
var headerCol2 = document.getElementById("header-col-2");
var headerCircle = document.getElementById("header-circle");
function checkBrowser() {
	if (window.innerWidth < 500) {
		if (isSafariBrowser()) {
			header.style.maxHeight = "100%";
			headerDetailsCon.style.height = "26%";
			headerImg.style.width = "47%";
			headerImg.style.left = "20%";
			headerImg.style.top = "2%";
			headerCol2.style.height = "50%";
		} else {
			header.style.maxHeight = "100%";
			headerDetailsCon.style.height = "14%";
			headerImg.style.width = "50%";
			headerImg.style.left = "12%";
			headerImg.style.top = "10%";
			headerCol2.style.height = "40%";
		}
	}
}
var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var header = document.getElementById("header-con");
function isSafariBrowser() {
	if (is_safari) {
		if (is_chrome) return false;
		else return true;
	}
	return false;
}

$(document).on("click", "#moveTo1", function () {
	fullpage_api.moveTo("Home", 0);
});

$(document).on("click", "#moveTo2", function () {
	fullpage_api.moveTo("Services", 0);
});
$(document).on("click", "#scrollMobile", function () {
	fullpage_api.moveTo("Services", 0);
});

$(document).on("click", "#moveTo3", function () {
	fullpage_api.moveTo("Why-Us", 0);
});

$(document).on("click", "#moveTo4", function () {
	fullpage_api.moveTo("About-Us", 0);
});

$(document).on("click", "#moveTo5", function () {
	fullpage_api.moveTo("Our-Customers", 0);
});
$(document).on("click", "#moveTo6", function () {
	fullpage_api.moveTo("Packages", 0);
});
$(document).on("click", "#moveTo7", function () {
	fullpage_api.moveTo("Our-Data", 0);
});
$(document).on("click", "#moveTo8", function () {
	fullpage_api.moveTo("Contact-Us", 0);
});
$(document).on("click", "#btn-modal-contact", function () {
	fullpage_api.moveTo("Contact-Us", 0);
	modal.style.display = "none";
});
$(document).on("click", "#btn-quote", function () {
	fullpage_api.moveTo("Contact-Us", 0);
});
var BtnCloseModal = document.getElementById("close-modal");
var modal = document.getElementById("popUpModal");
var contactCol2 = document.getElementById("contact-col-2");
var mapTitle = document.getElementById("map-title");
var mapCloseBtn = document.getElementById("map-close-btn");
var HkMap = document.getElementById("HK-map");
var UkMap = document.getElementById("UK-map");
var SingMap = document.getElementById("Sing-map");
var AusMap = document.getElementById("Aus-map");
var btnUk = document.getElementById("btn-UK");
var btnHK = document.getElementById("btn-HK");
var btnAus = document.getElementById("btn-Aus");
var btnSing = document.getElementById("btn-Sing");
BtnCloseModal.onclick = function () {
	modal.style.display = "none";
};
setTimeout(function () {
	modal.style.display = "flex";
}, 18000);

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
mapCloseBtn.onclick = function () {
	contactCol2.style.right = "-100%";
};
btnUk.onclick = function () {
	contactCol2.style.right = "0";
	UkMap.style.display = "flex";
	HkMap.style.display = "none";
	AusMap.style.display = "none";
	SingMap.style.display = "none";
	mapTitle.innerHTML = "United Kingdom";
};
btnHK.onclick = function () {
	contactCol2.style.right = "0";
	UkMap.style.display = "none";
	HkMap.style.display = "flex";
	AusMap.style.display = "none";
	SingMap.style.display = "none";
	mapTitle.innerHTML = "Hong Kong";
};
btnAus.onclick = function () {
	contactCol2.style.right = "0";
	UkMap.style.display = "none";
	HkMap.style.display = "none";
	AusMap.style.display = "flex";
	SingMap.style.display = "none";
	mapTitle.innerHTML = "Australia";
};
btnSing.onclick = function () {
	contactCol2.style.right = "0";
	UkMap.style.display = "none";
	HkMap.style.display = "none";
	AusMap.style.display = "none";
	SingMap.style.display = "flex";
	mapTitle.innerHTML = "Singapore";
};

var menuList = document.getElementById("menuList");
var menuBtn = document.getElementById("menuButton");
var menuCloseBtn = document.getElementById("menuCloseButton");
var headerMenuCloseBtn = document.getElementById("header-menu-close-btn");
var headerMenuBtn = document.getElementById("header-menu-btn");
$(document).on("click", "#header-menu-btn", function () {
	menuList.style.transform = "scaleX(1)";
	menuList.style.transformOrigin = "left";
	headerMenuCloseBtn.style.opacity = "1";
	headerMenuBtn.style.opacity = "0";
	headerMenuCloseBtn.style.display = "block";
	headerMenuBtn.style.display = "none";
});
$(document).on("click", "#header-menu-close-btn", function () {
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";
	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";
});
$(document).on("click", "#menuButton", function () {
	menuList.style.transform = "scaleX(1)";
	menuList.style.transformOrigin = "left";
	menuCloseBtn.style.opacity = "1";
	menuBtn.style.opacity = "0";
	menuCloseBtn.style.display = "block";
	menuBtn.style.display = "none";
});
$(document).on("click", "#menuCloseButton", function () {
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";
	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on("click", "#menuListItem1", function () {
	fullpage_api.moveTo("Home", 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";
	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";
	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on("click", "#menuListItem2", function () {
	fullpage_api.moveTo("Services", 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";
	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";
	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on("click", "#menuListItem3", function () {
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";
	fullpage_api.moveTo("Why-Us", 0);
	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";
	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on("click", "#menuListItem4", function () {
	fullpage_api.moveTo("About-Us", 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";
	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";
	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on('click', '#menuListItem5', function () {
	fullpage_api.moveTo('Our-Customers', 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";

	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";

	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on('click', '#menuListItem6', function () {
	fullpage_api.moveTo('Packages', 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";

	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";

	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on('click', '#menuListItem7', function () {
	fullpage_api.moveTo('Our-Data', 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";

	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";

	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});
$(document).on('click', '#menuListItem8', function () {
	fullpage_api.moveTo('Contact-Us', 0);
	menuList.style.transform = "scaleX(0)";
	menuList.style.transformOrigin = "left";

	headerMenuCloseBtn.style.opacity = "0";
	headerMenuBtn.style.opacity = "1";
	headerMenuCloseBtn.style.display = "none";
	headerMenuBtn.style.display = "block";

	menuCloseBtn.style.opacity = "0";
	menuBtn.style.opacity = "1";
	menuCloseBtn.style.display = "none";
	menuBtn.style.display = "block";
});


var headerNavDot1 = document.getElementById("header-nav-dot-1");
var logoWhite = document.getElementById("logo-white");
var logoRed = document.getElementById("logo-red");
var navDot1 = document.getElementById("nav-dot-1");
var navDot2 = document.getElementById("nav-dot-2");
var navDot3 = document.getElementById("nav-dot-3");
var navDot4 = document.getElementById("nav-dot-4");
var navDot5 = document.getElementById("nav-dot-5");
var navDot6 = document.getElementById("nav-dot-6");
var navDot7 = document.getElementById("nav-dot-7");
var navDot8 = document.getElementById("nav-dot-8");
var headerNavAnim1 = document.getElementById("header-nav-dot-anim-1");
var navAnim1 = document.getElementById("nav-dot-anim-1");
var navAnim2 = document.getElementById("nav-dot-anim-2");
var navAnim3 = document.getElementById("nav-dot-anim-3");
var navAnim4 = document.getElementById("nav-dot-anim-4");
var navAnim5 = document.getElementById("nav-dot-anim-5");
var navAnim6 = document.getElementById("nav-dot-anim-6");
var navAnim7 = document.getElementById("nav-dot-anim-7");
var menuListItem1 = document.getElementById("menuListItem1");
var menuListItem2 = document.getElementById("menuListItem2");
var menuListItem3 = document.getElementById("menuListItem3");
var menuListItem4 = document.getElementById("menuListItem4");
var menuListItem5 = document.getElementById("menuListItem5");
var menuListItem6 = document.getElementById("menuListItem6");
var menuListItem7 = document.getElementById("menuListItem7");
var menuListItem8 = document.getElementById("menuListItem8");
function setclass1() {
	headerNavDot1.classList.add("active");
	headerNavAnim1.classList.add("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	}
	navDot1.classList.add("active");
	navAnim1.classList.add("active");
	menuListItem1.classList.add("active");
	navDot2.classList.remove("active");
	menuListItem2.classList.remove("active");
	navAnim2.classList.remove("active");
	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");
	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");
	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");
	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");
	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");

	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
	nav.style.opacity = "0";
	nav.style.transition = "all 0.7s";
}
function setclass2() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}
	navDot2.classList.add("active");
	navAnim2.classList.add("active");
	menuListItem2.classList.add("active");
	navDot1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navAnim1.classList.remove("active");
	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");
	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");
	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");
	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");
	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");

	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
}
function setclass3() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}
	navDot3.classList.add("active");
	navAnim3.classList.add("active");
	menuListItem3.classList.add("active");
	navDot1.classList.remove("active");
	navAnim1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navDot2.classList.remove("active");
	navAnim2.classList.remove("active");
	menuListItem2.classList.remove("active");
	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");
	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");
	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");
	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");

	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
}
function setclass4() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}
	navDot4.classList.add("active");
	navAnim4.classList.add("active");
	menuListItem4.classList.add("active");
	navDot1.classList.remove("active");
	navAnim1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navDot2.classList.remove("active");
	navAnim2.classList.remove("active");
	menuListItem2.classList.remove("active");
	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");
	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");
	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");
	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");

	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
}
function setclass5() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}
	navDot5.classList.add("active");
	navAnim5.classList.add("active");
	menuListItem5.classList.add("active");
	navDot1.classList.remove("active");
	navAnim1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navDot2.classList.remove("active");
	navAnim2.classList.remove("active");
	menuListItem2.classList.remove("active");
	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");
	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");
	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");
	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");

	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
}
function setclass6() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}
	navDot6.classList.add("active");
	navAnim6.classList.add("active");
	menuListItem6.classList.add("active");
	navDot1.classList.remove("active");
	navAnim1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navDot2.classList.remove("active");
	navAnim2.classList.remove("active");
	menuListItem2.classList.remove("active");
	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");
	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");
	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");
	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");

	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
}
function setclass7() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	} else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}
	navDot7.classList.add("active");
	navAnim7.classList.add("active");
	menuListItem7.classList.add("active");
	navDot1.classList.remove("active");
	navAnim1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navDot2.classList.remove("active");
	navAnim2.classList.remove("active");
	menuListItem2.classList.remove("active");
	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");
	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");
	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");
	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");
	navDot8.classList.remove("active");
	menuListItem8.classList.remove("active");
}
function setclass8() {
	headerNavDot1.classList.remove("active");
	headerNavAnim1.classList.remove("active");
	if (window.innerWidth < 500) {
		logoWhite.style.opacity = "1";
		logoRed.style.opacity = "0";
	}
	else {
		logoWhite.style.opacity = "0";
		logoRed.style.opacity = "1";
	}

	navDot8.classList.add("active");
	menuListItem8.classList.add("active");

	navDot1.classList.remove("active");
	navAnim1.classList.remove("active");
	menuListItem1.classList.remove("active");
	navDot2.classList.remove("active");
	navAnim2.classList.remove("active");
	menuListItem2.classList.remove("active");

	navDot3.classList.remove("active");
	navAnim3.classList.remove("active");
	menuListItem3.classList.remove("active");

	navDot4.classList.remove("active");
	navAnim4.classList.remove("active");
	menuListItem4.classList.remove("active");

	navDot5.classList.remove("active");
	navAnim5.classList.remove("active");
	menuListItem5.classList.remove("active");

	navDot6.classList.remove("active");
	navAnim6.classList.remove("active");
	menuListItem6.classList.remove("active");

	navDot7.classList.remove("active");
	navAnim7.classList.remove("active");
	menuListItem7.classList.remove("active");
}

const WUCarousel = document.getElementById("wu-cards-carousel");
var wuMoveRight = 0;
var wuMoveLeft = 0;
function WUmoveRight() {
	if (window.innerWidth < 500) {
		if (wuMoveRight > -100) {
			wuMoveRight = wuMoveRight - 100;
			WUCarousel.style.left = wuMoveRight + "%";
		} else {
			wuMoveRight = 0;
			wuMoveLeft = 0;
			WUCarousel.style.left = "0";
		}
	} else {
		if (wuMoveRight > -100) {
			wuMoveRight = wuMoveRight - 100;
			WUCarousel.style.left = wuMoveRight + "%";
		} else {
			wuMoveRight = 0;
			wuMoveLeft = 0;
			WUCarousel.style.left = "0";
		}
	}
}
function WUmoveLeft() {
	if (window.innerWidth < 500) {
		wuMoveLeft = MoveRight + 100;
		if (wuMoveLeft <= 0) {
			WUCarousel.style.left = wuMoveLeft + "%";
			wuMoveRight = wuMoveRight + 100;
		} else {
			wuMoveRight = 0;
			wuMoveLeft = 0;
			WUCarousel.style.left = "0";
		}
	} else {
		if (wuMoveLeft <= 0) {
			WUCarousel.style.left = wuMoveLeft + "%";
			wuMoveRight = wuMoveRight + 100;
		} else {
			wuMoveRight = 0;
			wuMoveLeft = 0;
			WUCarousel.style.left = "0";
		}
	}
}
const pkgsCarousel = document.getElementById("pkgs-cards-con");
var MoveRight = 0;
var MoveLeft = 0;
function PkgmoveRight() {
	if (MoveRight > -300) {
		MoveRight = MoveRight - 100;
		pkgsCarousel.style.left = MoveRight + "%";
	} else {
		MoveRight = 0;
		MoveLeft = 0;
		pkgsCarousel.style.left = "0";
	}
}
function PkgmoveLeft() {
	MoveLeft = MoveRight + 100;
	if (MoveLeft <= 0) {
		pkgsCarousel.style.left = MoveLeft + "%";
		MoveRight = MoveRight + 100;
	} else {
		MoveRight = 0;
		MoveLeft = 0;
		pkgsCarousel.style.left = "0";
	}
}
const dataCarousel = document.getElementById("data-carousel");
const customerCarousel = document.getElementById("customer-carousel");
var MoveForward = 0;
var MoveBack = 0;
function customerMoveForward() {
	if (document.defaultView.innerWidth > 500) {
		if (MoveForward > -800) {
			MoveForward = MoveForward - 100;
			customerCarousel.style.left = MoveForward + "%";
		}
		else {
			MoveForward = 0;
			MoveBack = 0;
			customerCarousel.style.left = "0";
		}
	}
	else {
		if (MoveForward > -800) {
			MoveForward = MoveForward - 100;
			customerCarousel.style.top = MoveForward + "%";
		}
		else {
			MoveForward = 0;
			MoveBack = 0;
			customerCarousel.style.top = "0";
		}
	}
}
function customerMoveBack() {
	MoveBack = MoveForward + 100;
	if (document.defaultView.innerWidth > 500) {
		if (MoveBack <= 0) {
			customerCarousel.style.left = MoveBack + "%";
			MoveForward = MoveForward + 100;
		}
		else {
			customerCarousel.style.left = "0";
		}
	}
	else {
		if (MoveBack <= 0) {
			customerCarousel.style.top = MoveBack + "%";
			MoveForward = MoveForward + 100;
		}
		else {
			customerCarousel.style.top = "0";
		}
	}
}
function dataMoveForward() {
	if (document.defaultView.innerWidth > 500) {
		if (MoveForward > -200) {
			MoveForward = MoveForward - 100;
			dataCarousel.style.left = MoveForward + "%";
		} else {
			MoveForward = 0;
			MoveBack = 0;
			dataCarousel.style.left = "0";
		}
	} else {
		if (MoveForward > -200) {
			MoveForward = MoveForward - 100;
			dataCarousel.style.top = MoveForward + "%";
		} else {
			MoveForward = 0;
			MoveBack = 0;
			dataCarousel.style.top = "0";
		}
	}
}
function dataMoveBack() {
	MoveBack = MoveForward + 100;
	if (document.defaultView.innerWidth > 500) {
		if (MoveBack <= 0) {
			dataCarousel.style.left = MoveBack + "%";
			MoveForward = MoveForward + 100;
		} else {
			dataCarousel.style.left = "0";
		}
	} else {
		if (MoveBack <= 0) {
			dataCarousel.style.top = MoveBack + "%";
			MoveForward = MoveForward + 100;
		} else {
			dataCarousel.style.top = "0";
		}
	}
}
// ==========================================================
// ------------------Modal Scripts---------------------------
// =========================================================
var servicesModal = document.getElementById("services-modal");
var s1Modal = document.getElementById("s1-modal");
var s2Modal = document.getElementById("s2-modal");
var s3Modal = document.getElementById("s3-modal");
var s4Modal = document.getElementById("s4-modal");
var s5Modal = document.getElementById("s5-modal");
var s6Modal = document.getElementById("s6-modal");
var s8Modal = document.getElementById("s8-modal");
var s9Modal = document.getElementById("s9-modal");
var s10Modal = document.getElementById("s10-modal");
var s11Modal = document.getElementById("s11-modal");
var s12Modal = document.getElementById("s12-modal");
$(document).on("click", "#services-modal-btn-close", function () {
	servicesModal.style.visibility = "hidden";
	enableScroll();
});
$(document).on("click", "#service-card-1", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "flex";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-2", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "flex";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-3", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "flex";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-4", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "flex";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-5", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "flex";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-6", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "flex";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-7", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "flex";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-8", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "flex";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-9", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "flex";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-10", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "flex";
	s11Modal.style.display = "none";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-11", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "flex";
	s12Modal.style.display = "none";
	disableScroll();
});
$(document).on("click", "#service-card-12", function () {
	servicesModal.style.visibility = "visible";
	s1Modal.style.display = "none";
	s2Modal.style.display = "none";
	s3Modal.style.display = "none";
	s4Modal.style.display = "none";
	s5Modal.style.display = "none";
	s6Modal.style.display = "none";
	s8Modal.style.display = "none";
	s9Modal.style.display = "none";
	s10Modal.style.display = "none";
	s11Modal.style.display = "none";
	s12Modal.style.display = "flex";
	disableScroll();
});
function disableScroll() {
	fullpage_api.setAllowScrolling(!1);
}
function enableScroll() {
	fullpage_api.setAllowScrolling(!0);
}
//========================
// Draggable Element JS
// =======================
dragElement(document.getElementById("whatsapp-icon"));
function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}
	function elementDrag(e) {
		var chatCon = document.getElementById("chat-con");
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
	const updateCount = () => {
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
