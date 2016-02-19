(function() {
  'use strict';

  angular
    .module('pangaea', ['ui.router', 'angular-storage', 'ngAnimate'])
    .run(run);

    run.$inject = ['$http', '$rootScope', '$state', 'authService'];

    function run($http, $rootScope, $state, authService) {
      
      //

      $rootScope.$on('$stateChangeStart', function(e, toState) {
        if(!angular.isUndefined(toState.data) && toState.data.requireLogin) {
          authService.isAuthenticated().then(function(response) {
            if(!response.data.auth) {
              e.preventDefault();
              $state.go('login');
            }
          });
        }
      });
    }
})();
