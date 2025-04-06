let inp=document.querySelector("input");

/*inp.addEventListener("keydown",function(event){
    console.log("key=",event.key);
    console.log("code=",event.code);
    console.log("key was pressed");
})*/

inp.addEventListener("keydown",function(event){
    console.log("Code=",event.code);
    if(event.code=="KeyU"){
        console.log("Move Upward");
    }
    else if(event.code=="KeyD"){
        console.log("Move Downward");
    }
    else if(event.code=="KeyL"){
        console.log("Move Left");
    }
    else if(event.code=="KeyR"){
        console.log("Move Right");
    }
});