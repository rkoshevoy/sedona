$(document).ready(function() {
	var menu = $('.main-header__menu-button');
	var nav = $('.main-nav');
	var close = $('.main-nav__close');

	$(nav).removeClass('main-nav__show');

	$(menu).click(function() {
		$(nav).addClass('main-nav__show');
	})

	$(close).click(function() {
		$(nav).removeClass('main-nav__show');
	})

});