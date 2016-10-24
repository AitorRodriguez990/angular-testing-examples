'use strict';

describe('myApp.home module', function() {
    beforeEach(module('myApp.home'));

    describe('Home controller', function() {
        it('should ....', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var homeController = $controller('HomeController', { $scope: scope });
            expect(homeController).toBeDefined();
        }));

        it('should return a string', function() {
            expect(scope.helloWorld()).toEqual('Hello World!');
        });
    });
});
