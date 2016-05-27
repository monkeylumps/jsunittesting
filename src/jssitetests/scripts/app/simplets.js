var simpletests;
(function (simpletests) {
    var Add = (function () {
        function Add() {
            this.numone = 7;
            this.numtwo = 12;
            this.total = this.numone + this.numtwo;
        }
        return Add;
    }());
    simpletests.Add = Add;
    var thing = new Add();
    alert(thing.total);
})(simpletests || (simpletests = {}));
