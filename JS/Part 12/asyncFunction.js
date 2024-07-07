<<<<<<< HEAD
async function greet() {
    throw "weak connection";
    return"hello";
}

greet()
.then((result) => {
    console.log("promise was resolved");
})
.catch((err) => {
    console.log("promise was rejected with err : ", err)
})

let demo = async () => {
    return 5;
=======
async function greet() {
    throw "weak connection";
    return"hello";
}

greet()
.then((result) => {
    console.log("promise was resolved");
})
.catch((err) => {
    console.log("promise was rejected with err : ", err)
})

let demo = async () => {
    return 5;
>>>>>>> origin/main
}