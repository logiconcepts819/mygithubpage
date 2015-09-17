(function ($) {

	new WOW().init();

	//Code to cover the entire viewport with the background image
	//(assuming background has aspect ratio of 4:3)
	var resize_func = function() {
		var intro = jQuery(".intro");
		var width = jQuery(window).width();
		var height, mq = window.matchMedia("(min-width: 767px)");
		if (mq.matches) {
			height = jQuery(window).height();
		} else {
			height = jQuery("#about").position().top;
		}
		if (3 * width < 4 * height) {
			intro.css("background-size", "auto "+height+"px");
		} else {
			intro.css("background-size", width+"px");
		}
	};

	jQuery(window).load(function() {
		resize_func();
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".inline-img").addClass("inline-img-small");
			$(".brand-txt").addClass("brand-txt-visible");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".inline-img").removeClass("inline-img-small");
			$(".brand-txt").removeClass("brand-txt-visible");
		}
	});

	//jQuery to ensure the background image spans the entire viewport
	$(window).resize(resize_func);

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
