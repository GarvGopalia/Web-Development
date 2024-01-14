// Question 2
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    btn.style.background = "green";
});

//Question 3
let inp = document.querySelector("input");
let h1 = document.querySelector("h1");

inp.addEventListener("input", function() {
    console.log(this.value)
    h1.innerText = this.value;
})