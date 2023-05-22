const sayHello = (name) => {
    return 'Hello ' + name
};

const sayHi = (name) => {
    return 'Hi ${name}'
};

const add = (a, b) => {
    return a + b
};

const multiply = (a, b) => {
    return a * b
};

module.exports = sayHello, sayHi, add, multiply;
