function multipleGreet(func, count) {
    for(let i=1; i<=count1; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 2);