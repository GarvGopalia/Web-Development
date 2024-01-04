let arr = [1,2,3,4,5,6,2,3];
let num = 2

for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1)
    }
}
console.log(arr);
//Question 2
let number = 287152;
let count = 0;

let copy = number;
while(copy > 0) {
    count++;
    copy=Math.floor(copy/10)
}
console.log(count);

//Question 3
let num1=287152;
let sum=0;
let copy1=num1;
while(copy1>0) {
    digit=copy1%10;
    sum=sum+digit;
    copy1=Math.floor(copy1/10);
}
console.log(sum);

//Question 4
let factorial = 1;
let n = 5;

for(let k=1; k<=n; k++) {
    factorial = factorial*k;
}
console.log(`factorial of ${n} is ${factorial}`);

//Question 5
let array = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let a=0; a<=array.length; a++) {
    if(largest<array[a]) {
        largest=array[a];
    }
}
console.log(largest);