<<<<<<< HEAD




function oddOrEvenFactory(request) {
    if (request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("wrong request")
    }
}

=======




function oddOrEvenFactory(request) {
    if (request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("wrong request")
    }
}

>>>>>>> origin/main
let request = prompt("Enter the request")