'use strict';

/**
 * @ngdoc service
 * @name patternsApp.userRepository
 * @description
 * # userRepository
 * Service in the patternsApp.
 */
 angular.module('patternsApp')
 .service('UserRepository', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var get = function (id) {
    	console.log('Getting user ' + id);
    	return {
    		name: 'Jon Mills'
    	};
    };

    var save = function (user) {
    	console.log('Saving ' + user.name + ' to the db');
    };
    
    return {
    	get: get,
    	save: save
    };
});
