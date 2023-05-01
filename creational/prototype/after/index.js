const store_prototype = require('./store_prototype');

const alex = store_prototype.clone();
console.log(alex);
alex.name = 'Alex';
alex.addItemToList('Alex notebook');

const eve = store_prototype.clone();
eve.name = 'Eve';
eve.addItemToList('Eve notebook');


console.log(`${alex.name} has ${alex.getListItem().length} items`);
console.log(`${eve.name} has ${eve.getListItem().length} items`);




