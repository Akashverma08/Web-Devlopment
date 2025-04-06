let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("del");
    item.appendChild(delBtn);

});


ul=document.querySelector("ul");
ul.addEventListener("click",function(event){
    //console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        console.log("Deleted");
        listItem.remove();
    }
})
/*let delBtns=document.querySelectorAll(".del");
for (delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
}*/