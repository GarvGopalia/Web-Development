//Constructuer function doesn't rerturn anything and start with captial letter
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`)
}

let p1 = new Person("garv", 20);
