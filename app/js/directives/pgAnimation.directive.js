(function() {
	'use strict';

	angular
	  .module(app)
	  .directive('pgAnimation', pgAnimation);

	function pgAnimation() {
		return {
			controller: function ($scope, $element, $attrs) {
				$element.addClass('animated ' + $attrs.pgAnimation);
				setTimeout(function() {
					$element.addClass('show');

					setTimeout(function() {
						$element.removeClass('show');
					}, 1000);

				}, 1000);
			}
		}
	}
})();