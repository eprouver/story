
'use strict';

/**
 * @ngdoc overview
 * @name adventureApp
 * @description
 * # adventureApp
 *
 * Main module of the application.
 */
angular
  .module('adventureApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
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
      .when('/story/:page', {
        templateUrl: 'views/story.html',
        controller: 'StoryCtrl',
        controllerAs: 'story'
      })
      .when('/trending', {
        templateUrl: 'views/trending.html',
        controller: 'TrendingCtrl',
        controllerAs: 'trending'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
