class User {
    constructor(name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}`
    }
}

class UserBase {
    constructor (users) {
        this.users = users;
    }

    count() {
        return this.users.length;
    }

    getNames() {
        return this.users.map((user) => user.name);
    }

    getIntroductions() {
        return this.users.map((user) => `Hi, my name is ${user.name}`)
    }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];


const userBase = new UserBase(users);

console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());


// module.exports = User;
// module.exports = UserBase;