const getSquare = (n) => (
    n*n
)

console.log(getSquare(4));

let id1 = setInterval(() => {
    console.log("Hello World")
},2000);

setTimeout(() =>{
    clearInterval(id)
},10000)