const Candy = require('../lib/candy');

describe('candy', () => {
    test ('returns Mars', () => {
        const mars = new Candy('Mars', 4.99);
        expect(mars.getName()).toBe('Mars')
    });

    test ('returns 4.99', () => {
        const mars = new Candy('Mars', 4.99);
        expect(mars.getPrice()).toBe(4.99)
    });
});