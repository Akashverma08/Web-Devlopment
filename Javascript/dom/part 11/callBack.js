/*let h1=document.querySelector("h1");


function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange()
    },delay)
}
//nested callback-> callHell
changeColor("red",1000,()=>{
    changeColor("Orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("red",1000,()=>{
                changeColor("grey",1000);
            });
        })
    })

})*/

function saveDb(data,success,failure){
    let internetspeed=Math.floor(Math.random() *10)+1;
    if (internetspeed>4){
        success();
    }else{
        failure();
    }
}

saveDb("Hello",()=>{
    console.log("Success: Data saved ");
    saveDb("Akash",()=>{
        console.log("Success1: Data saved");
        saveDb("Verma",()=>{
            console.log("Success 2: Data saved");
        },()=>{
            console.log("Failure2: Weak Connection");
        })
    },()=>{
        console.log("Failure2: weak connection");
    })
},()=>{
    console.log("Failure:Weak connection");
})