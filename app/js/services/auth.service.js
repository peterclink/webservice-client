(function() {
  'use strict';

  angular
    .module('pangaea')
    .factory('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    //$http.defaults.useXDomain = true;

    var service = {
      logon: logon,
      getJwt: getJwt,
      validateJwt: validateJwt,
    };

    return service;

    function logon(credentials) {
      //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      return $http.post("http://webservice.localhost:8090/auth", credentials);
    }

    function getJwt() {
      return $http.get("http://webservice.localhost:8090/user/jwt");
    };

    function validateJwt(token) {
      var aux = token.split('.');
      console.log(token);
      var newToken = aux[0] + '.' + aux[1] + '.' + aux[2];
      console.log(newToken);
      return $http.get('http://webservice.localhost:8090/user/validate', {
          headers: {'HTTP_AUTHORIZATION': newToken}
      });
    };
  }
})();