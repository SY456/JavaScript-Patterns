'use strict';

/**
 * @ngdoc service
 * @name patternsApp.Task
 * @description
 * # Task
 * Factory in the patternsApp.
 */
 angular.module('patternsApp')
 .factory('Task', function (TaskRepository) {
    // Service logic
    // ...

    var Task = function (name) {
      this.name = name; 
      this.completed = false;
    };

    Task.prototype.complete = function () {
      console.log('completing task: ' + this.name);
      this.completed = true;
      this.save();
    };

    Task.prototype.save = function () {
      TaskRepository.save(this);
    };

    // Public API here
    return Task;
  });
