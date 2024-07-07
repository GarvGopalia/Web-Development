<<<<<<< HEAD
// class Person{
//     constructor(name, age) {
//         console.log("person class constructor")
//         this.name= name;
//         this.age= age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("student class constructor")
//         super(name, age); //parent's class constructer is been called
//         this.marks = marks;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         console.log("teacher class constructor")
//         super(name, age); //parent's class constructer is been called
//         this.subject = subject;
//     }
// }

class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I'm eating")
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bard() {
        console.log("woff..")
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow..")
    }
=======
// class Person{
//     constructor(name, age) {
//         console.log("person class constructor")
//         this.name= name;
//         this.age= age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("student class constructor")
//         super(name, age); //parent's class constructer is been called
//         this.marks = marks;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         console.log("teacher class constructor")
//         super(name, age); //parent's class constructer is been called
//         this.subject = subject;
//     }
// }

class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I'm eating")
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bard() {
        console.log("woff..")
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow..")
    }
>>>>>>> origin/main
}