(function() {
	'use strict';

	angular
	  .module(app)
	  .directive('addonNavbar', addonNavbar);

	function addonNavbar() {
		return {
			restrict: 'EACM',
			replace : true,
			controller: 'authController',
			controllerAs: 'vm',
			templateUrl :  'views/directives/addonNavbar.html'
		};
	}
})();