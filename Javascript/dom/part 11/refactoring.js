let h1=document.querySelector("h1");


function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color Changed");
        },delay)

    })
}

changeColor("red",1000)
.then(()=>{
    console.log("Red color completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green Color completed");
})

