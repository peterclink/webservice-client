(function(){
  'use strict';

  angular
    .module('pangaea')
    .value('appValue', {
      apiUrl: 'http://webservice.localhost:8090',
    });
})();
