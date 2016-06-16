import {AppComponent} from '../app/app.component';

import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

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