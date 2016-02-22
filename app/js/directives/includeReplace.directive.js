(function() {
	'use strict';

	angular
	  .module('pangaea')
	  .directive('includeReplace', includeReplace);

	function includeReplace() {
		return {
			scope : {},
	        restrict: 'A', /* optional */
	        link: function (scope, el, attrs) {
	            el.replaceWith(el.children());
	        }
		};
	}
})();