$(document).ready(function () {
	$('.burger__menu').click(function (event) {
		$('.burger__menu, .nav').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});


$(document).ready(function () {
	$('.nav.active a').click(function (event) {
		$('.burger__menu, .nav').toggleClass('active');
	});
});


var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});

