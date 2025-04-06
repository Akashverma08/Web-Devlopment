let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    //console.log("Form submitted");

    //let user=this.element[0]; //form.element[0]
    //let pass=this.elemnt[1];
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);

    alert(`hii ${user.value} ,this is your password ${pass.value}`);


});