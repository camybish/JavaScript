//const fetchPokemon = require('./api')

class Pokedex {
    constructor () {
        this.pokecase = [];
    }
    catch (pokemonName) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => response.json())
            .then((data) => {
                let pokemonData = { 
                    name : data.name,
                    id : data.id,
                    height : data.height,
                    weight : data.weight,
                    pokemonType : data.types.map((element) => {
                        return element.type.name
                        })
                }
                this.pokecase.push(pokemonData);
            })
    }
    all () {
        return this.pokecase;
    }
}

module.exports = Pokedex;