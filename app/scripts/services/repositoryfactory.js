'use strict';

/**
 * @ngdoc service
 * @name patternsApp.RepositoryFactory
 * @description
 * # RepositoryFactory
 * Factory in the patternsApp.
 */
 angular.module('patternsApp')
 .factory('RepositoryFactory', function (UserRepository, TaskRepository, ProjectRepository ) {
    // Service logic
    // ...
    var repository = function (repoType) {
      if (repoType === 'task') {
        return TaskRepository;   
      }
      if (repoType === 'user') {
        return UserRepository;
      }
      if (repoType === 'project') {
        return ProjectRepository;
      }
    };
    
    // Public API here
    return {
      getRepo: repository
    };

  });
