const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

const searchMaxPrice = (maxPrice) => {
    return candies.filter( candy => candy.price <= maxPrice );
};


const searchCandies = (search, maxPrice) => {
    result = (searchMaxPrice(maxPrice) && searchPartCandies(search)); 
    return result.map(sweetResult => sweetResult.name)
};

const searchPartCandies = (search) => {
    return candies.filter( candy =>
        candy.name.startsWith(search));
}

// const showSearchCandyNames = () => {
//     arr = [];
//     results = arr.map.push(searchCandies);
//     return results.name;
// }

module.exports = searchCandies;

// = console.log(searchMaxPrice(10))
// console.log(candies)
// = console.log(searchPartCandies("Ma"))
// = console.log(searchCandies(candies))
// = console.log(searchMaxPrice(10) && searchPartCandies("Ma"))
// console.log(searchCandies("Ma", 10))
// console.log(showSearchCandyNames)