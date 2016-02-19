(function() {
  'use strict';

  angular
    .module('pangaea')
    .controller('dashboardController', dashboardController);

  dashboardController.$inject = ['store', 'authService'];

  function dashboardController(store, authService) {
    var vm = this;

    vm.user = 'Peter Link';
    vm.token = store.get('token');
    vm.isAuthenticated = isAuthenticated;

    function isAuthenticated() {
    	authService.isAuthenticated().success(function(data) {
    		vm.validate = data;
    	});
    }
    
  }
})();
