//Question 1
let arr = [1,2,3,4,5];
const square = arr.map((arr) => arr * arr);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur);

let avg = sum / arr.length;
console.log(avg);

//Question 2
let arr1 = [1,2,3,4,5];
const plus = arr1.map((arr1) => arr1 + 5);
console.log(plus);

//Question 3
let array = ["garv", "yash", "abhishek", "himank"];
const upper = array.map((array) => array.toUpperCase())
console.log(upper);

//Question 4
const doubleAndReturnArgs = (arr2,...args) => [
    ...arr,
    ...args .map((v) => v * 2)
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);

//Question 5
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects({a:1, b:2,}, {c:3, d:4})