(function() {
  'use-strict';

  angular
    .module("pangaea")
    .config(uiRouterConfig);

  uiRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function uiRouterConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'authController',
        controllerAs: 'vm',
      })
      .state('main', {
        templateUrl: 'views/_main.html',
        data: {
          requireLogin: true,
        }
      })
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'vm',
      })
      .state('teste', {
        url: '/teste/:token',
        template: '<div>Hello</div>',
        controller: function($stateParams) {
          alert($stateParams.token);
        }
      });
  }

}());
