//Question 2
let arr1 = [5,3,7,67,3,1,7,0];

function getMin(min) {
let min = arr1.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    };
    return min;
})
}



//Question 1
let arr3 = [10,20,40,60];

let ans1 = arr3.every((el) => el % 10 == 0);

console.log(ans1);