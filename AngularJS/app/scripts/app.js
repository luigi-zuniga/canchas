'use strict';

/**
 * @ngdoc overview
 * @name canchasApp
 * @description
 * # canchasApp
 *
 * Main module of the application.
 */
angular
  .module('canchasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/canchas', {
        templateUrl: 'views/canchas.html',
        controller: 'CanchasCtrl',
        controllerAs: 'canchas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
