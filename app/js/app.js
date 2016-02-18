(function() {
  'use strict';

  angular
    .module('pangaea', ['ui.router'])
    .run(run);

    run.$inject = ['$http', '$rootScope', '$state', 'authService'];

    function run($http, $rootScope, $state, authService) {
      
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

      $rootScope.$on('$stateChangeStart', function(e, toState) {
        if(!angular.isUndefined(toState.data) && toState.data.requireLogin && !authService.isAuthenticated()) {
            e.preventDefault();
            $state.go('login');
        }
      });
    }
})();
