'use strict';

describe('myApp.operation module', function() {
    beforeEach(module('myApp.operation'));

    describe('Operation controller', function() {
        it('should ....', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var operationController = $controller('OperationController', { $scope: scope });
            expect(operationController).toBeDefined();
        }));
    });
});
