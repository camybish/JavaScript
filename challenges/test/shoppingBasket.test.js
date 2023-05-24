const ShoppingBasket = require('../lib/shoppingBasket');

describe('ShoppingBasket', () => {
    test ('returns total price as 0', () => {
        const empty = new ShoppingBasket;
        expect(empty.getTotalPrice()).toBe(0)
    });

    test ('adds mars bar and returns total price', () => {
        // const mars = new Candy('Mars', 4.99);
        const marsBasket = new ShoppingBasket;

        const candydouble = {
            getPrice: () => 4.99,
            getName: () => 'Mars'
          };

        marsBasket.addItem(candydouble);
        expect(marsBasket.getTotalPrice()).toEqual(4.99)
    });

    test ('adds mars & two skittles and returns total price', () => {
        const candyBasket = new ShoppingBasket;

        const candydouble = {
            getPrice: () => 4.99,
            getName: () => 'Mars'
          };
        
        const skittledouble = {
            getPrice: () => 3.99,
            getName: () => 'Skittle'
          };
        candyBasket.addItem(candydouble);
        candyBasket.addItem(skittledouble);
        candyBasket.addItem(skittledouble);
        expect(candyBasket.getTotalPrice()).toEqual(12.97)
    });
});