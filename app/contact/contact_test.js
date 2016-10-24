'use strict';

describe('myApp.contact module', function() {
    beforeEach(module('myApp.contact'));

    describe('Contact controller', function() {
        it('should ....', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var contactController = $controller('ContactController', { $scope: scope });
            expect(contactController).toBeDefined();
        }));
    });
});
