'use strict';

/**
 * @ngdoc function
 * @name patternsApp.controller:ConstructorCtrl
 * @description Constructor pattern
 * # MainCtrl
 * Controller of the patternsApp
 */
 angular.module('patternsApp')
 .controller('ConstructorCtrl', function (Task, TaskRepository) {

 	console.log('ConstructorCtrl');
 	
 	var ctrl = this;
 	ctrl.tasks = [];
 	ctrl.tasks.push(new Task(TaskRepository.get(1)));
 	ctrl.tasks.push(new Task(TaskRepository.get(2)));
 
});
