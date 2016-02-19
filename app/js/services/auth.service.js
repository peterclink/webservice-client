(function() {
  'use strict';

  angular
    .module('pangaea')
    .factory('authService', authService);

  authService.$inject = ['$http', 'appValue'];

  function authService($http, appValue) {
    //$http.defaults.useXDomain = true;

    var service = {
      logon: logon,
      getJwt: getJwt,
      validateJwt: validateJwt,
    };

    return service;

    function logon(credentials) {
      //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      return $http.post( appValue.baseUrl + '/auth', credentials);
    }

    function getJwt() {
      return $http.get(appValue.baseUrl + '/user/jwt');
    };

    function validateJwt(token) {
      var aux = token.split('.');
      console.log(token);
      var newToken = aux[0] + '.' + aux[1] + '.' + aux[2];
      console.log(newToken);
      return $http.get( appValue.baseUrl + '/user/validate', {
          headers: {'HTTP_AUTHORIZATION': newToken}
      });
    };
  }
})();