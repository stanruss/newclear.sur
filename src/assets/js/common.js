$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="src/assets/img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position  : 'left'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});
 // Bind to scroll
    $(window).scroll(function () {

       

        if ($(this).scrollTop() > 10) {
            $('.my_menu').addClass('fixed animated fadeInDown');
        } else {
            $('.my_menu').removeClass('fixed animated fadeInDown');
        }

        
    });

	});