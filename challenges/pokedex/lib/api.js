const fetchPokemon = (pokemonName) => {
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
        return pokemonData;
    })        
}


module.exports = fetchPokemon;

/*
Copy into node

const fetchPokemon = require('./api.js')
fetchPokemon('pikachu')
.then((pokemon) => console.log(pokemon));

*/