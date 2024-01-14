let btn = document.querySelector("button");


btn.addEventListener('click', function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated")
});

function getRandomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("parah was clicked")
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("mouse inside div")
})