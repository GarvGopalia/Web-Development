<<<<<<< HEAD
let num1 = [1,2,3,4];
let finalVal = num1.reduce((res, el) => res + el);
console.log(finalVal);

let arr2 = [1,2,3,4,5,6,7,9,11];

let max = arr2.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

=======
let num1 = [1,2,3,4];
let finalVal = num1.reduce((res, el) => res + el);
console.log(finalVal);

let arr2 = [1,2,3,4,5,6,7,9,11];

let max = arr2.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

>>>>>>> origin/main
console.log(max);