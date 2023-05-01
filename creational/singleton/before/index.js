const Logger = require('./Logger');
const Store = require('./store');
const Shopper = require('./Shop');

const logger = new Logger();

logger.log('Starting app...');

const alex = new Shopper('Alex', 500);
const jeansStore = new Store('Jeans Store', [
    {
        item: 'Jeans',
        qty: 5,
        price: 20
    },
    {
        item: 'Hoodie',
        qty: 10,
        price: 30
    }
]);

logger.log('Finished config...');

console.log(logger.count);

logger.items.forEach(item => {
    console.log(`A logger item: ${item.time} ${item.item}`);
})