const Person = require('./Person');

class Shopper extends Person{
    constructor(name,age,address){
        super(name);
        this.age = age;
        this.address = address;
    }

}

module.exports = Shopper;