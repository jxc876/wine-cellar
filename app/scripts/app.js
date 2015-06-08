'use strict';

/**
 * @ngdoc overview
 * @name wineCellarApp
 * @description
 * # wineCellarApp
 *
 * Main module of the application.
 */
angular
  .module('wineCellarApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/wine', {
        templateUrl: 'views/wine/index.html',
        controller: 'WineCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
