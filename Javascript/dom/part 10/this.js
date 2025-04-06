let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");

/*btn.addEventListener("click",function(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
});*/

btn.addEventListener("click",changeBackgroundColor);
h1.addEventListener("click",changeBackgroundColor);
h3.addEventListener("click",changeBackgroundColor);
p.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}