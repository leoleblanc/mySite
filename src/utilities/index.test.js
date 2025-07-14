import * as utilities from "./index.ts";

describe('utilities.ts', () => {
    describe('urlifiedString', () => {
        test('when input is Some String, should give some-string', () => {
            expect(utilities.urlifiedString('Some String')).toBe('some-string')
        });
        test('when input is SOMESTRING, should give somestring', () => {
            expect(utilities.urlifiedString('SOMESTRING')).toBe('somestring')
        })
    })
})