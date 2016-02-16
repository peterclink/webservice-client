(function() {
  'use strict';

  angular
    .module('pangaea')
    .factory('authService', authService);

  //factory.$inject = [];

  function authService() {
    var service = {
      isAuthenticated: isAuthenticated
    };

    return service;

    function isAuthenticated() {
      return false;
    }
  }
})();
