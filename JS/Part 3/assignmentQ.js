<<<<<<< HEAD
//Question 1
let arr = [7,9,0,-1];
let n = 3;

let ans = arr.slice(0,n);
console.log(ans);

//Question 2
let arr1 = [7,9,0,-2];
let n1 = 3;

let ans1 = arr1.slice(arr1.length-n)
console.log(ans1)

//Question 3
let str = prompt("Enter the string :");
if(str.length == 0){
    console.log("string is empty");
}else {
    console.log("string is not empty");
}

//Question 4
let str1 = "DEPRIVED"
let idx = 3;
if(str1 == str1.toLowerCase()){
    console.log("string is in lower case")
}else{
    console.log("string is not in lower case")
}

//Question 5
let strip = prompt("Enter the string :");
console.log(`String before strip = ${strip}`);
console.log(`String after strip = ${strip.trim()}`);

//Question 6
let array = [34,45,23,64,39];
let item = 23;
if(array.indexOf(item) != -1){
    console.log(`${item} in the array`)
}else {
    console.log(`${item} not in the array`)
=======
//Question 1
let arr = [7,9,0,-1];
let n = 3;

let ans = arr.slice(0,n);
console.log(ans);

//Question 2
let arr1 = [7,9,0,-2];
let n1 = 3;

let ans1 = arr1.slice(arr1.length-n)
console.log(ans1)

//Question 3
let str = prompt("Enter the string :");
if(str.length == 0){
    console.log("string is empty");
}else {
    console.log("string is not empty");
}

//Question 4
let str1 = "DEPRIVED"
let idx = 3;
if(str1 == str1.toLowerCase()){
    console.log("string is in lower case")
}else{
    console.log("string is not in lower case")
}

//Question 5
let strip = prompt("Enter the string :");
console.log(`String before strip = ${strip}`);
console.log(`String after strip = ${strip.trim()}`);

//Question 6
let array = [34,45,23,64,39];
let item = 23;
if(array.indexOf(item) != -1){
    console.log(`${item} in the array`)
}else {
    console.log(`${item} not in the array`)
>>>>>>> origin/main
}