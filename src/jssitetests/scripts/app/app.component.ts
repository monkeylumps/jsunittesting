import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><p>{{total}}</p>'
})
export class AppComponent {
    public number1: number;
    public number2: number;
    public total: number;

    constructor() {
        this.number1 = 20;
        this.number2 = 10;

        this.total = this.number1 - this.number2;
    }
}