'use strict';

/**
 * @ngdoc service
 * @name patternsApp.ProjectRepository
 * @description
 * # ProjectRepository
 * Service in the patternsApp.
 */
 angular.module('patternsApp')
 .service('ProjectRepository', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var get = function (id) {
    	console.log('Getting project ' + id);
    	return {
    		name: 'New project'
    	};
    };

    var save = function (project) {
    	console.log('Saving ' + project.name + ' to the db');
    };

    return {
    	get: get,
    	save: save
    };
});
