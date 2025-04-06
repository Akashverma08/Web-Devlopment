let inp=document.querySelector("#user");

inp.addEventListener("input",function(){
    console.log(this.value);
    let p=document.querySelector("p");
    p.innerText=this.value;
})