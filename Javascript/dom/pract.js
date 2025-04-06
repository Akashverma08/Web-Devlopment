let p=document.createElement('p');
p.innerText="Hey I'm red";
document.querySelector("body").append(p);
p.classList.add("red");


let h3=document.createElement('h3');
h3.innerText="Hey I am Blue H3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div=document.createElement('div');
let h1=document.createElement('h1');
let para=document.createElement('p');

h1.innerText="I m  the Div";
para.innerText="Me too....";

div.append(h1);
div.append(para);
div.classList.add("box");
document.querySelector("body").append(div)
