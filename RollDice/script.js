const btn=document.querySelector(".click");
const result=document.querySelector("h2");

btn.addEventListener("click",()=>{
    let dicValue=Math.floor(Math.random()*6 +1);
    result.innerHTML=dicValue;
    let image="";

    switch(dicValue){
        case 1: image='dice1.png'; break;
        case 2: image='dice2.png'; break;
        case 3: image='dice3.png'; break;
        case 4: image='dice4.png'; break;
        case 5: image='dice5.png'; break;
        case 6: image='dice6.png'; break;
        default: break;
    }

    document.getElementById('image').src=image;
})