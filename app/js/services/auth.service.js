(function() {
  'use strict';

  angular
    .module('pangaea')
    .service('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    //$http.defaults.useXDomain = true;
    this.getJwt = function() {
      return $http.get("http://webservice.localhost:8090/user/jwt");
    };

    this.validateJwt = function() {
      return $http.get('http://webservice.localhost:8090/user/validate', {
          headers: {'HTTP_AUTHORIZATION': 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpc3MiOiJKV1QgRXhhbXBsZSIsImF1ZCI6IkpXVCBFeGFtcGxlIiwiaWF0IjoxNDU1NzM4OTI0LCJleHAiOjE0NTU3NDI1MjR9.'}
      });
    };
  }
})();