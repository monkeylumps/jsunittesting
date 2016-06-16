"use strict";
var app_component_1 = require('../app/app.component');
var testing_1 = require('@angular/core/testing');
testing_1.describe('test this file', function () {
    testing_1.it('should add up', function () {
        var thing = new app_component_1.AppComponent();
        testing_1.expect(thing.total).toBe(10);
    });
    testing_1.it('should not add up', function () {
        var thing = new app_component_1.AppComponent();
        testing_1.expect(thing.total).toBe(0);
    });
});
testing_1.it('true is true', function () { return testing_1.expect(true).toEqual(true); });
//# sourceMappingURL=app.component.spec.js.map