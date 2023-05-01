const Person = require('./Person');

class Shopper extends Person{
    constructor(name, age, address){
        super(name, age, address);
    }

    
}

module.exports = Shopper;