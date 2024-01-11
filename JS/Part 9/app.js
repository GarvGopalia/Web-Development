// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {
//     console.dir(smallImages[i].src);
// } 

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("div a"));

// let links = document.querySelectorAll(".box a");

// for(link of links) {
//     link.style.color = "purple";
// }

// for(let i=0; i<links.length; i++) {
    // links[i].style.color = "purple";
// }

let para1 = document.createElement("p");
para1.innerText ="Hey I'm red!";
document.querySelector('body').append(para1);
para1.classList.add('red')

let heading = document.createElement("h3");
heading.innerText ="I'm blue h3!";
document.querySelector('body').append(heading);
heading.classList.add('blue')

let div = document.createElement("div");
let head = document.createElement("h1");
let para = document.createElement("p");

head.innerText = "I'm in a div";
para.innerText = "ME TOO";

div.append(head);
div.append(para);
div.classList.add('box');

document.querySelector('body').append(div);