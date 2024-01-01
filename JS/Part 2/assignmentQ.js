//Question 1
let num = 100;
if(num % 10 == 0) {
    console.log("Good")
}
else {
    console.log("Bad")
}

//Question 2
let name = prompt("Enter your name :");
let age = prompt("Enter your age");

alert(`${name} is ${age} years old.`);

//Question 3
let quater = 1;
switch(quater) {
    case "1":
        console.log("January, February, March");
        break;
    case "2":
        console.log("April, May, June");
        break;
    case "3":
        console.log("July, August, September");
        break;
    case "4":
        console.log("October, November, December");
        break;
    default :
        console.log("NOT A QUARTER!")            
}

//Question 4
let str = "apple";
if((str[0] == "a" || str[0] == "A") && str.length >= 5){
    console.log("golden string");
}
else {
    console.log("It is not a golden string");
}

//Question 5
let a = 5;
let b = 4;
let c = 7;
if (a>b && a>c){
    console.log(`${a} is the biggest number`);
}
else if (b>a && b>c){
    console.log(`${b} is the biggest number`);
}
else {
    console.log(`${c} is the biggest number`)
}

if (a>b) {
    if (a>c) {
        console.log("${a} is the biggest number`");
    }
    else {
        console.log(`${c} is the biggest number`);
    }
}
else {
    if (b>c) {
        console.log(`${b} is the biggest number`);
    }
    else {
        console.log(`${c} is the biggest number`);
    }
}

//Question 6
let num1 = 32;
let num2 = 47852;

if (num1 % 10 == num2 % 10 ) {
    console.log("Last digit of two numbers are same, which is",num1%10);
}
else  {
    console.log("Last digit of two numbers are not same");
}