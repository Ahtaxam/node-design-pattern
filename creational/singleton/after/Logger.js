class Logger{
    constructor(name, money = 0){   
        this.name = name;
        this.money = money;
        this.items = [];
    }
    get count(){
        return this.items.length;
    }
    log(item){
        const time = new Date().getTime();
        this.items.push({time, item});
        console.log(time , " " , item);
    }

    printStatus(){
        console.log( "Total Purchased items: " ,this.items.length);
    }

}


class ShoperSingleton{
    constructor(name, money = 0){   
        if(!ShoperSingleton.instance){
            ShoperSingleton.instance = new Logger(name, money);
        }
        return ShoperSingleton.instance;
    }
}

module.exports = ShoperSingleton;