'use strict';

describe('myApp.version module', function() {
    beforeEach(module('myApp.version'));

    describe('Version service', function() {
        it('should return current version', inject(function(version) {
            expect(version).toEqual('0.3');
        }));
    });
});
