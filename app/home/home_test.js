'use strict';

describe('myApp.home module', function() {
    beforeEach(module('myApp.home'));

    describe('Home controller', function() {
        it('should ....', inject(function($controller) {
            var homeController = $controller('HomeController');
            expect(homeController).toBeDefined();
        }));

        it('should return a string', function() {
            expect(helloWorld()).toEqual('Hello World!');
        });
    });
});
