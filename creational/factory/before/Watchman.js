const Shopper = require('./Shopper');

class Watchman extends Shopper{
    constructor(name, age, address){
        super(name, age, address);
        this.pay = 0;
    }

    increasePay(pay){
        this.pay += pay;
    }

}

module.exports = Watchman;