import {AppComponent} from '../app/app.component';

import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

describe('test this file', () => {
    it('should add up', () => {
        var thing = new AppComponent();
        expect(thing.total).toBe(10);
    });
    it('should not add up', () => {
        var thing = new AppComponent();
        expect(thing.total).toBe(0);
    });
});

it('true is true', () => expect(true).toEqual(true));

describe('AppComponent with TCB', function () {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AppComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
            });
        })));
});