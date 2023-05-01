class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Person;
