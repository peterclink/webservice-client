(function() {
	'use strict';

	angular
	  .module('pangaea')
	  .service('questionService', questionService);

	questionService.$inject = ['$http'];

	function questionService($http) {
		//$http.defaults.useXDomain = true;
		this.getQuestions = function() {
			return $http.get("http://webservice.localhost:8090/user/get");
		};
	}
})();