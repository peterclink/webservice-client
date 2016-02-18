(function() {
	'use strict';

	angular
	  .module('pangaea')
	  .controller('authController', authController);

	authController.$inject = ['authService'];

	function authController(authService) {

	 	var vm = this;

		authService.getJwt().success(function(data){
			vm.jwt = data.token;
			
			authService.validateJwt(vm.jwt).success(function(data){
				vm.auth = data;
			});
		});	

	}
})();