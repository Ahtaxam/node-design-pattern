const Shopper = require('./Shoper');

const alex = new Shopper('Alex');
alex.addItemToList('Alex notebook');
alex.addItemToList('camping knife');
alex.addItemToList('tent');
alex.addItemToList('backpack');
alex.addItemToList('map');



const eve = new Shopper('Eve');
eve.addItemToList('Eve notebook');
eve.addItemToList('camping knife');
eve.addItemToList('tent');
eve.addItemToList('backpack');
eve.addItemToList('map');


console.log(`${alex.name} has ${alex.getListItem().length} items`);
console.log(`${eve.name} has ${eve.getListItem().length} items`);




