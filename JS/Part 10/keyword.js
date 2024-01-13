let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("key = ",event.code);
    if(event.code == "ArrowUp") {
        console.log("character moves forward")
    } else if (event.code == "ArrowDowm") {
        console.log("character moves forward")
    } else if (event.code == "ArrowDowm") {
        console.log("character moves dowm")
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left")
    } else if (event.code == "ArrowRight") {
        console.log("character moves Rght")
    }
})
