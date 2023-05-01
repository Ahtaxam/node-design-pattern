const Shopper = require('./Shoper');

const store = new Shopper();
store.addItemToList('camping knife');
store.addItemToList('tent');
store.addItemToList('backpack');
store.addItemToList('map');

module.exports = store;
