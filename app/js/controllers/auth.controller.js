(function() {
  'use strict';

  angular
    .module('pangaea')
    .controller('authController', authController);

  authController.$inject = ['$scope', 'authService', '$state', 'store'];

  function authController($scope, authService, $state, store) {
    /* jshint validthis:true */
    var vm = this;

    vm.credentials = {
      login : 'peterlink',
      password : '123456'
    };
    
    vm.login = login;
    vm.logout = logout;

    function login(credentials) {
      authService.logon(credentials).success(function(data) {
        if(data.auth) {
          store.set('token', data.token);
          $state.go('main.dashboard');
        } else {
          console.log('error');
        }
      });
    }

    function logout() {
      console.log('teste');
      store.remove('token');
      $state.go('login');
    }
  }
})();
