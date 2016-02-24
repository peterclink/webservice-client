(function() {
  'use strict';

  angular
    .module('pangaea')
    .factory('authService', authService);

  authService.$inject = ['$http', 'appValue', '$httpParamSerializerJQLike', 'store'];

  function authService($http, appValue, $httpParamSerializerJQLike, store) {
    //$http.defaults.useXDomain = true;

    var service = {
      logon: logon,
      isAuthenticated: isAuthenticated,
    };

    return service;

    function logon(credentials) {
      return $http.post( appValue.apiUrl + '/auth', $httpParamSerializerJQLike(credentials));
    }

    function isAuthenticated() {

      var token = store.get('token');
      
      return $http.get( appValue.apiUrl + '/auth/isAuthenticated', {
          headers: {'AUTHORIZATION': token}
      });
    }
  }
})();