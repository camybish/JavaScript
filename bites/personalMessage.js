const generateMessages = (arrNames) => {
    return `Hi ${arrNames.name}! ${arrNames.discount}% off our best candies for you today!`;
}

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

//console.log(names.map(generateMessages))

console.log(namesAndDiscounts.map(element => generateMessages(element)))