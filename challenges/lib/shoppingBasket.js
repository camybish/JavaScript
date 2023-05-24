

class ShoppingBasket {
    constructor () {
        this.basket = [];
    }

    addItem (candy) {
        this.basket.push(candy);
    }

    getTotalPrice () {
        let sum = 0;
        //return Number(this.basket.map((element) => element.getPrice())) + sum;
        this.basket.forEach((candy) => {
            sum += candy.getPrice();
          });

        return sum;
    }

};

// module.exports = { candy: Candy, shoppingBasket: ShoppingBasket };

module.exports = ShoppingBasket;

/*
const candy = new Candy('Mars', 4.99);

candy.getName();
//'Mars'
candy.getPrice();
//4.99

const basket = new ShoppingBasket();
basket.getTotalPrice();
//0

basket.addItem(candy);

basket.getTotalPrice();
//4.99

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

basket.getTotalPrice();
//12.97
*/