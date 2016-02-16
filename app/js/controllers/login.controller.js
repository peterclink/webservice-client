(function() {
  'use strict';

  angular
    .module('pangaea')
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', 'userService', '$state'];

  function loginController($scope, userService, $state) {
    /* jshint validthis:true */
    var vm = this;

    vm.credentials = {};
    vm.login = login;

    function login() {
      userService.logon(vm.credentials);
      $state.go('main.dashboard');
    }
  }
})();
