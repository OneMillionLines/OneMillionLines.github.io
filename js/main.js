(function($){"use strict";$('.counter').counterUp({time:500});$('#portfolio').mixItUp();var owl=$("#clients-scroller");owl.owlCarousel({items:5,itemsTablet:3,margin:90,stagePadding:90,smartSpeed:450,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,3],itemsTablet:[767,2],itemsTabletSmall:[480,2],itemsMobile:[479,1],});var owl=$(".touch-slider");owl.owlCarousel({navigation:false,pagination:true,slideSpeed:1000,stopOnHover:true,autoPlay:true,items:1,itemsDesktopSmall:[1024,1],itemsTablet:[600,1],itemsMobile:[479,1]});$('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');$('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');$(window).on('scroll',function(){if($(window).scrollTop()>200){$('.header-top-area').addClass('menu-bg');}else{$('.header-top-area').removeClass('menu-bg');}});$('.video-popup').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false,});var offset=200;var duration=500;$(window).scroll(function(){if($(this).scrollTop()>offset){$('.back-to-top').fadeIn(400);}else{$('.back-to-top').fadeOut(400);}});$('.back-to-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0},600);return false;})
new WOW().init();$('.main-navigation').onePageNav({currentClass:'active'});$(window).on('load',function(){$('body').scrollspy({target:'.navbar-collapse',offset:195});$(window).on('scroll',function(){if($(window).scrollTop()>200){$('.fixed-top').addClass('menu-bg');}else{$('.fixed-top').removeClass('menu-bg');}});});$('.lightbox').nivoLightbox({effect:'fadeScale',keyboardNav:true,});$('.map-icon').on('click',function(e){$('#google-map').toggleClass('panel-show');e.preventDefault();});$.stellar({horizontalScrolling:false,verticalOffset:40,responsive:true});$(window).on('load',function(){"use strict";$('#loader').fadeOut();});}(jQuery));