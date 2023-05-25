const Pokedex = require('../lib/Pokedex')

describe('Pokedex', () => {
    it('all returns empty', () => {
        const pokedex = new Pokedex();
        
        expect(pokedex.all()).toEqual([]);
    });

    it('catch', (done) => {
        const pokedex  = new Pokedex();
        pokedex.catch('pikachu')
        .then(() => {
            expect(pokedex.all()[0].name).toBe('pikachu')
            done();
        });
    });

    it('all', (done) => {
        const pokedex  = new Pokedex();
        pokedex.catch('pikachu')
        .then(() => {
            expect(pokedex.all()[0].name).toBe('pikachu')
            done();
        });
        pokedex.catch('bidoof')
        .then(() => {
            expect(pokedex.all()[1].name).toBe('bidoof')
            done();
        });
    });
});