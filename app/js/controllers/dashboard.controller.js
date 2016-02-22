(function() {
  'use strict';

  angular
    .module('pangaea')
    .controller('dashboardController', dashboardController);

  dashboardController.$inject = ['store', 'authService', '$timeout'];

  function dashboardController(store, authService, $timeout) {
    var vm = this;

    vm.user = 'Peter Link';
    vm.token = store.get('token');
    vm.isAuthenticated = isAuthenticated;

    function isAuthenticated() {
    	authService.isAuthenticated().success(function(data) {
        vm.auth = true;
    		vm.validate = data;

        

        $timeout(timer(vm.validate.user), 1000);

        function timer( $seconds ) {
          var time = $seconds,
              horas = Math.floor(time/3600),
              minutos = Math.floor((time - (horas * 3600)) / 60),
              segundos = Math.floor(time % 60);
              if(time > 0)
                $timeout(timer(time--), 1000);
    
          console.log(horas + ':' + minutos + ':' + segundos);
        }


    	});
    }

    
  }
})();
