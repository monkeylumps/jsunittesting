"use strict";
var app_component_1 = require('../app/app.component');
describe('test this file', function () {
    it('should add up', function () {
        var thing = new app_component_1.AppComponent();
        expect(thing.total).toBe(10);
    });
    it('should not add up', function () {
        var thing = new app_component_1.AppComponent();
        expect(thing.total).toBe(0);
    });
});
it('true is true', function () { return expect(true).toEqual(true); });
//# sourceMappingURL=app.component.spec.js.map