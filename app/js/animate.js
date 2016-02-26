/*$('[data-animation]').each(function() {
	var element = $(this);
	element.addClass('animated');
	element.appear(function() {

		var delay = ( element.data('delay') ? element.data('delay') : 1 );
		if( delay > 1 ) element.css('animation-delay', delay + 'ms');				
		element.addClass( element.data('animation') );
		setTimeout(function() {
			element.addClass('visible');
		}, delay);

	});
});*/

function animation() {

	var $animation = document.querySelectorAll('[data-animation]');

	console.log($animation.length);
	console.log($animation);
}


