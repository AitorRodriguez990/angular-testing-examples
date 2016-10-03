'use strict';

angular.module('myApp.operation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/operation', {
    templateUrl: 'operation/operation.html',
    controller: 'OperationController'
  });
}])

.controller('OperationController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.menu = {
        home: false,
        operation: true,
        contact: false
    };
}]);
