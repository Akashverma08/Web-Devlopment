let btn=document.querySelector("button");
btn.addEventListener("mouseout",function(event){
    console.log("mouse is out");

});

let inp=document.querySelector("input");
inp.addEventListener("keypress",function(){
    console.log("Key is press");
})

btn.addEventListener("click",function(){
    btn.style.backgroundColor='green';
});


