module simpletests {
    export class Add {
        numone: number;
        numtwo: number;
        total: number;

        constructor() {
            this.numone = 7;
            this.numtwo = 12;
            this.total = this.numone + this.numtwo;
        }
    }

    var thing = new Add();

    alert(thing.total);
}
