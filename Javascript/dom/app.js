/*let smallObj=document.getElementsByClassName("oldImg");
for(let i=0;i<smallObj.length;i++){
    smallObj[i].src="assets/spiderman_img.png";
    console.log(`Value of ${i} is changed`);
    console.dir(smallObj[i]);
}*/

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));


let links =document.querySelectorAll(".box a");
//for(let i=0;i<links.length;i++){
//    links[i].style.color="Green";}

for(link of links){
    link.style.color="orange";

}
