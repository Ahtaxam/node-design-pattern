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

}

module.exports = Shopper;