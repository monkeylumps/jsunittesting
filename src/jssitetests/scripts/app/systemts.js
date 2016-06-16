"use strict";
var imported_1 = require('./imported');
var SystemAdder = (function () {
    function SystemAdder() {
        var adder = new imported_1.Adder();
        this.newTotal = 10 + adder.total;
    }
    return SystemAdder;
}());
exports.SystemAdder = SystemAdder;
var thing = new SystemAdder();
alert(thing.newTotal);
//# sourceMappingURL=systemts.js.map