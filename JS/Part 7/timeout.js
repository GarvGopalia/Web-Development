console.log("Hi there!");

setTimeout ( () => {
    console.log("Deprived")
},4000)

console.log("Welcome"); 

let id = setInterval ( () => {
    console.log("Deprived")
},4000)

console.log(id);

clearInterval(id);