describe('test this file', function () {
    it('should add up', function () {
        var thing = new simpletests.Add();
        expect(thing.total).toBe(19);
    });
    it('should not add up', function () {
        var thing = new simpletests.Add();
        expect(thing.total).toBe(0);
    });
});
it('true is true', function () { return expect(true).toEqual(true); });
//# sourceMappingURL=simplets.spec.js.map