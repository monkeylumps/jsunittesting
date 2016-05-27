"use strict";
var Adder = (function () {
    function Adder() {
        this.numone = 7;
        this.numtwo = 12;
        this.total = this.numone + this.numtwo;
    }
    return Adder;
}());
exports.Adder = Adder;
var thing = new Adder();
alert(thing.total);
