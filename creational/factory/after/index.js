const userFactory = require("./factory")

const alex = userFactory("Alex Banks", 45, "LHR", 'watchman');
const eve = userFactory("Eve Porcello", 32,"ISB", 'shopper');

alex.increasePay(100);

console.log(alex.toString());
console.log(eve.toString());