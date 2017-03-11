$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	$('.header__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		infinite: true
	});

	$('.main__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		infinite: true
	});


	$(".main__all-watch").first().addClass("main__all-watch-active");
	$(".main__choice-watch ul li").first().addClass("active-list");
	$(".main__choice-watch ul li").click(function (e) {
		var n = $(".main__choice-watch ul li").index($(this));
		$(".main__all-watch").removeClass("main__all-watch-active");
		$(".main__choice-watch ul li").removeClass("active-list");
		$(".main__choice-watch ul li").eq(n).addClass("active-list");
		$(".main__all-watch").removeClass("main__all-watch-active animated fadeIn");
		$(".main__all-watch").eq(n).addClass("main__all-watch-active animated fadeIn");	
	});

	
	$('.toggle-menu').on('click', function(){
		$('.overlay').fadeIn();
		$('.header__main__nav').fadeIn();
		return false;
	})
	$('.header__main__nav, .overlay').on('click', function(){
		$('.overlay').fadeOut();
		$('.header__main__nav').fadeOut();
	})



	 $('.slider-for').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	dots: true,
	  	centerMode: true,
	  	focusOnSelect: true
	});

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
