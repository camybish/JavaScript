const FizzBuzzUntil = (num) => {
    let i = 1;

    while (i <= num) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Fizzbuzz');
        } else if (i % 3 === 0) { 
            console.log('Fizz');
        } else if (i % 5 === 0) { 
            console.log('Buzz');
        } else {
            console.log(i);
        }
    i += 1;
    }
}

module.exports = FizzBuzzUntil;