(function ($) {

	new WOW().init();

	//Code for determining whether the brand text will fit on the same
	//line as the navbar
	var brand_text_fits = function() {
		var height, mq = window.matchMedia("(max-width: 767px)");
		if (mq.matches) {
			return true;
		}
		var offset1 = $(".navbar-brand").offset().left;
		var offset2 = $(".navbar-right").offset().left;
		var width = (
			$(".inline-img").outerWidth() +
			$(".brand-txt").outerWidth());
		return width < offset2 - offset1;
	};

	//Code for determining whether to show the brand text based on
	//navbar offset and whether the brand text fits on the same line as
	//the navbar
	var can_show_brand_text = function() {
		return $(".navbar").offset().top > 50 && brand_text_fits();
	};

	//Code that appropriately shows or hides brand text
	var show_or_hide_brand_text = function() {
		if (brand_text_fits()) {
			$(".brand-txt").removeClass("brand-txt-hidden-nofade");
		} else {
			$(".brand-txt").addClass("brand-txt-hidden-nofade");
		}
		if (can_show_brand_text()) {
			$(".brand-txt").addClass("brand-txt-visible");
		} else {
			$(".brand-txt").removeClass("brand-txt-visible");
		}
	};

	//Code to cover the entire viewport with the background image
	//(assuming background has aspect ratio of 4:3) and ensure the
	//text and menubar don't overlap
	var resize_func = function() {
		var intro = $(".intro");
		var width = $(window).width();
		var height, mq = window.matchMedia("(min-width: 768px)");
		if (mq.matches) {
			height = $(window).height();
		} else {
			height = $("#about").position().top;
		}
		if (3 * width < 4 * height) {
			intro.css("background-size", "auto "+height+"px");
		} else {
			intro.css("background-size", width+"px");
		}
		show_or_hide_brand_text();
	};

	$(window).load(function() {
		resize_func();
		$("#preloader").delay(100).fadeOut("slow");
		$("#load").delay(100).fadeOut("slow");
	});

	//jQuery to collapse the navbar and show or hide brand text on scroll
	var scroll_func = function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".inline-img").addClass("inline-img-small");
			$(".navbar-custom").addClass("navbar-subtle-effect");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".inline-img").removeClass("inline-img-small");
			$(".navbar-custom").removeClass("navbar-subtle-effect");
		}
		show_or_hide_brand_text();
	};

	//jQuery to collapse the navbar on scroll
	$(window).scroll(scroll_func);

	//jQuery to ensure the background image spans the entire viewport
	$(window).resize(resize_func);

	//Execute scroll and resize callbacks in case the page is refreshed
	//for any reason
	scroll_func();
	resize_func();

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
