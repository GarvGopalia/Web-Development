let num = [1,2,3,4];

let double = num.map((el) => {
    return el*2;
})

let nums = [1,2,3,4,7,8,2,9,10,12,11];
let ans = nums.filter((el) =>{
    return el % 2 == 0;
})