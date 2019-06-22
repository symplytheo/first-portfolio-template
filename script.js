// Navigation Transparent to White
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>50){
            $('nav').addClass('navbar-white');
        } else {
            $('nav').removeClass('navbar-white');
            $('nav').addClass('navbar-trans');
        }
    })
});


// Counter
$('.counter').counterUp({
    delay: 5,
    time: 3500
});


// Typed 
if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 50,
            loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
    }


// Testimonial Slide
$('#testimonial-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

// Clients Slide
$('#client-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})