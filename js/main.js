$(window).scroll(function() {
            if ($(this).scrollTop() >= 200) {
                $('.navbar-fixed-top').css('background', 'rgb(39 43 52)');
            } else {
                $('.navbar-fixed-top').css('background', 'transparent');
            }
        });

 $(window).on('load', function() { 
 	   $('#preloader').fadeOut();
 	});