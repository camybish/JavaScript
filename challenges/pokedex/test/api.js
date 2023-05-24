const fetchPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}


module.exports = fetchPokemon;

/*
Copy into node

const fetchPokemon = require('./api.js')
fetchPokemon('pikachu')

*/