$(window).scroll(function(){
	let mytop = $(window).scrollTop();	
	if (mytop > 20){
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
});

var swiperBanner = new Swiper('#bannersinit', {
  slidesPerView: 1,
  pagination: {
    el: '#bannersinit .swiper-pagination',
    clickable: true,
  },
  on: {
    slideChangeTransitionStart: function(){
        littleSwiper.slideTo(swiperBanner.activeIndex);
    }
  }
});

var littleSwiper = new Swiper('#littleSwip', {
  slidesPerView: 1,
  on: {
    slideChangeTransitionStart: function(){
        swiperBanner.slideTo(littleSwiper.activeIndex);
    }
  },
  autoplay: {
    delay: 3500
  }
});




var swiperVideos = new Swiper('.videos .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30
});

var Redesswiper = new Swiper('.redes_sociales .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.redes_sociales .swiper-pagination',
    clickable: true,
  },
  navigation: {
	nextEl: '.redes_sociales .swiper-button-next',
    prevEl: '.redes_sociales .swiper-button-prev',
  },
});


var AuspiciadoresSwiper = new Swiper('.auspiciadores .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
});


