(function() {
  'use strict';

  angular
    .module('pangaea')
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', 'authService', '$state', '$httpParamSerializerJQLike'];

  function loginController($scope, authService, $state, $httpParamSerializerJQLike) {
    /* jshint validthis:true */
    var vm = this;

    vm.credentials = {
      login : 'peterlink',
      password : '123456'
    };
    vm.login = login;

    function login(credentials) {
      authService.logon($httpParamSerializerJQLike(credentials)).success(function(data) {
        if(data.auth) {
          console.log(data.token);
        } else {
          console.log('error');
        }
      });
      //$state.go('main.dashboard');
    }
  }
})();
