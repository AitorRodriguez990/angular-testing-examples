'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.menu = {
        home: true,
        operation: false,
        contact: false
    };
}]);
