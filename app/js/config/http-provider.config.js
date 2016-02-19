(function() {
	'use strict';

	angular
	  .module('pangaea')
	  .config(httpProvider);

	httpProvider.$inject = ['$httpProvider'];

	function httpProvider($httpProvider) {
		$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	}
})();