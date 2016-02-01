'use strict';

/**
 * @ngdoc service
 * @name patternsApp.TaskRepository
 * @description
 * # TaskRepository
 * Service in the patternsApp.
 */
 angular.module('patternsApp')
 .service('TaskRepository', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

	var get = function (id) {
		console.log('Getting task ' + id);
		return {
			name: 'new task from db'
		};
	};

	var save = function (task) {
		console.log('Saving ' + task.name + ' to the db');
	};

	return {
		get: get,
		save: save
	};
    
});
