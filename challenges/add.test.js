const add = require('../bites/add')
const multiply = require('../bites/multiply')

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2,2)).toBe(4);
    });

    it('adds 5 and 0', () => {
        expect(add(5,0)).toBe(5);
    });
});

describe('multiply', () => {
    it('multiplies 2 and 2', () => {
        expect(multiply(2,2)).toBe(4);
    });

    it('multiplies 3 and 4', () => {
        expect(multiply(3,4)).toBe(12);
    });
});