let arr1 = [1,2,3]
let arr2 = [1,2,3]
arr1.sayHello = () =>{
    console.log("Hello I'm arr")
}

arr2.sayHello = () =>{
    console.log("Hello I'm arr")
}

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person
}


