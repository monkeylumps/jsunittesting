"use strict";
var systemts_1 = require('../app/systemts');
describe('test this file', function () {
    it('should add up', function () {
        var thing = new systemts_1.SystemAdder();
        expect(thing.newTotal).toBe(29);
    });
    it('should not add up', function () {
        var thing = new systemts_1.SystemAdder();
        expect(thing.newTotal).toBe(0);
    });
});
it('true is true', function () { return expect(true).toEqual(true); });
//# sourceMappingURL=systemts.spec.js.map