(function() {
  'use strict';

  angular
    .module('pangaea')
    .factory('userService', userService);

  userService.$inject = ['$http', 'apiFirebaseValue'];

  function userService($http, apiFirebaseValue) {
    var service = {
      logon: logon
    };

    return service;

    function logon() {
      
    }
  }

})();
