(function() {
	'use strict';

	angular
	  .module('pangaea')
	  .controller('authController', authController);

	authController.$inject = ['authService'];

	function authController(authService) {

	 	var vm = this;

		authService.getJwt().success(function(data){
			console.log(data);
			vm.jwt = data.token;
			
			authService.validateJwt().success(function(data){
				console.log(data);
				vm.auth = data;
			});
		});	

	}
})();