'use strict';

/**
 * @ngdoc function
 * @name patternsApp.controller:FactoryCtrl
 * @description Factory pattern
 * # FactoryCtrl
 * Controller of the patternsApp
 */
angular.module('patternsApp')
  .controller('FactoryCtrl', function (Task, RepositoryFactory) {

 	console.log('FactoryCtrl');

 	var task1 = new Task(RepositoryFactory.getRepo('task').get(1));
 	var task2 = new Task(RepositoryFactory.getRepo('task').get(2));

 	var user = RepositoryFactory.getRepo('user').get(1);
 	var project = RepositoryFactory.getRepo('project').get(1);

 	task1.user = user;
 	task1.project = project;

	task1.save();
	task2.save();
	
  });
