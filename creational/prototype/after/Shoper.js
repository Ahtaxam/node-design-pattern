class Shopper{
    constructor(name = "xyz"){
        this.name = name;
        this.list = [];
    }

    addItemToList(item){
        this.list.push(item);
    }

    getListItem(){
        return this.list;
    }

    clone(){
        const cloned = Object.create(this);
        
        cloned.name = this.name;
        cloned.list = [...this.list];
        return cloned;
    }

}

module.exports = Shopper;