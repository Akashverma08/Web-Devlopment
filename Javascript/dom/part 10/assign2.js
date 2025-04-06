let nam=document.querySelector("#name");

nam.addEventListener("input",function(){
    let h2=document.querySelector("h2");
    console.log(this.value);
    h2.innerText=this.value.replace(/[^a-zA-Z]/g,'');
})