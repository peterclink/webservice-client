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
        controller: 'loginController',
        controllerAs: 'vm',
      })
      .state('main', {
        templateUrl: 'views/_main.html',
        data: {
          requireLogin: true,
        }
      })
      .state('questions', {
        url: '/questions',
        templateUrl: 'views/questions.html',
        controller: 'questionController',
        controllerAs: 'vm',
      })
      .state('question', {
        url: '/question/:id',
        templateUrl: 'views/question.html',
        controller: 'questionController',
        controllerAs: 'vm',
      })
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
      })
      .state('auth', {
        url: '/auth',
        templateUrl: 'views/auth.html',
        controller: 'authController',
        controllerAs: 'vm',
      });
  }

}());
