import {AppComponent} from '../app/app.component';

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