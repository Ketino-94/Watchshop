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

	$('.responsive').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,	
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				dots: false,
				prevArrow: false,
	  			nextArrow: false
			}
		},
		{
			breakpoint: 480,	
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				dots: false,
				prevArrow: false,
	  			nextArrow: false
			}
		}
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
		]
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
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	dots: false,
	  	focusOnSelect: true,
	  	prevArrow: false,
	  	nextArrow: false
	});

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
