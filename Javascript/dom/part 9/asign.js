let btn=document.createElement("button");
let input=document.createElement("input");

btn.innerText="Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

//Answer 2

input.setAttribute("id","username");
input.setAttribute("placeholder","username");


//Answder 3
let button=document.querySelector("#btn");
btn.classList.add("box");

//anser 4
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add("dom");


//answer5

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";

document.querySelector("body").append(p);
