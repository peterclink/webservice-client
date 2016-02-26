(function() {
	'use strict';

	angular
	  .module(app)
	  .directive('pgNavbar', pgNavbar);

	function pgNavbar() {
		return {
			restrict: 'EACM',
			replace : false,
			templateUrl :  'views/directives/pgNavbar.html'
		};
	}
})();