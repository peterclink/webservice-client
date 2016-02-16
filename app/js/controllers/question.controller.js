(function() {
	'use strict';

	angular
	  .module('pangaea')
	  .controller('questionController', questionController);

	questionController.$inject = ['$state', 'questionService', '$stateParams'];

	function questionController($state, questionService, $stateParams) {

	 	var vm = this;

		questionService.getQuestions().success(function(data){
			console.log(data);
			vm.questions = data;
		});	
	}
})();