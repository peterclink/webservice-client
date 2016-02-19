(function(){
  'use strict';

  angular
    .module('pangaea')
    .value('appValue', {
      baseUrl: 'http://webservice.localhost',
    });
})();
