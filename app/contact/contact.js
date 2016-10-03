'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactController'
  });
}])

.controller('ContactController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.menu = {
        home: false,
        operation: false,
        contact: true
    };

    $scope.waitReply = false;
    $scope.sendContact = function() {
        $scope.waitReply = true;
    };
}]);
