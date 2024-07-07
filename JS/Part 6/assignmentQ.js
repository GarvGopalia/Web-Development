<<<<<<< HEAD
//Question 1
let arr = [2,6,7,9,1,5,8];
let num = 5;
function larger(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

larger(arr, num);

//Question 2
let str = "abcdabcdefgggh"
//function to get String with all unique elements
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            //if current character isnot added, then add it in ans.

            //Otherwise it is a duplicate
            ans += currChar
        }
    }
    return ans;
}


//Question 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for(let j=0; j<country.length; j++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[j].length;
        if(currLen > ansLen){
            ansIdx =i;
        }
    }
    return country[ansIdx];
}

longestName(country);


//Question 4
let string = "deprived";
function countVowels(string) {
    count1 = 0;
    for(let k=0; k < string.length; k++) {
        if(
        string.charAt(i) == "a" ||
        string.charAt(i) == "e" ||
        string.charAt(i) == "i" ||
        string.charAt(i) == "o" ||
        string.charAt(i) == "u"
        ) {
            count1++;
        }
    }
}

return count1


//Question 5
let start = 100;
let end = 200;

function range(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() *diff) + start;
}

=======
//Question 1
let arr = [2,6,7,9,1,5,8];
let num = 5;
function larger(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

larger(arr, num);

//Question 2
let str = "abcdabcdefgggh"
//function to get String with all unique elements
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            //if current character isnot added, then add it in ans.

            //Otherwise it is a duplicate
            ans += currChar
        }
    }
    return ans;
}


//Question 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for(let j=0; j<country.length; j++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[j].length;
        if(currLen > ansLen){
            ansIdx =i;
        }
    }
    return country[ansIdx];
}

longestName(country);


//Question 4
let string = "deprived";
function countVowels(string) {
    count1 = 0;
    for(let k=0; k < string.length; k++) {
        if(
        string.charAt(i) == "a" ||
        string.charAt(i) == "e" ||
        string.charAt(i) == "i" ||
        string.charAt(i) == "o" ||
        string.charAt(i) == "u"
        ) {
            count1++;
        }
    }
}

return count1


//Question 5
let start = 100;
let end = 200;

function range(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() *diff) + start;
}

>>>>>>> origin/main
