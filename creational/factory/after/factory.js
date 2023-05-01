const Watchman = require('./Watchman');
const Shopper = require('./Shopper');

const userFactory = (name, age, address, role) => {
    if(role === 'watchman'){
        return new Watchman(name, age, address);
    } else {
        return new Shopper(name, age, address);
    }
}

module.exports = userFactory;