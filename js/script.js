$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__main').toggleClass('active');
		$('body').toggleClass('lock');
	});
});