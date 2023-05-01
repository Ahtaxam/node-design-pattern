const Shopper = require('./Shopper');
const Watchman = require('./Watchman');

const alex = new Shopper('Alex Banks', 23);
const eve = new Watchman('Eve Porcello', 32, '123 Main St.');

eve.increasePay(67)

console.log(alex.toString());
console.log(eve.toString());