(function() {
  'use strict';

  angular
    .module('pangaea', ['ui.router'])
    .run(run);

    run.$inject = ['$log', '$rootScope', '$state', 'authService'];

    function run($log, $rootScope, $state, authService) {

      $rootScope.$on('$stateChangeStart', function(e, toState) {
        if(!angular.isUndefined(toState.data) && toState.data.requireLogin && !authService.isAuthenticated()) {
            e.preventDefault();
            $state.go('login');
        }

      });
    }
})();
