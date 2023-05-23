class Candy {
    constructor(candyName, price) {
        this.candyName = candyName;
        this.price = price;
    }

    getName() {
        return this.candyName;
    }

    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    constructor() {
        this.basket = [];
    }
    getTotalPrice() {
        let sum = 0; 
        this.basket.map(sweet => sum += sweet.price);
        return sum;
    } 
    addItem(candy) {
        this.basket.push(candy);
    }
}

const candy = new Candy('Mars', 4.99);





console.log(candy.getName()); //
//'Mars'
console.log(candy.getPrice()); //
//4.99

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice()); //
//0

basket.addItem(candy);

console.log(basket.getTotalPrice()); //
//4.99

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice()); //
//12.97