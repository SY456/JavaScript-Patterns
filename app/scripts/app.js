'use strict';

/**
 * @ngdoc overview
 * @name patternsApp
 * @description
 * # patternsApp
 *
 * Main module of the application.
 */
angular
  .module('patternsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ConstructorCtrl',
        controllerAs: 'main'
      })
      .when('/factory', {
        templateUrl: 'views/factory.html',
        controller: 'FactoryCtrl'
      });
  });
