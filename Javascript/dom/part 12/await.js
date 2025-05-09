/*function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random() * 10)+1;
            console.log(num);
            resolve();
        },1000);
    })

}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
}*/

h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if (num>3){
                reject("Promise rejected");
            }
            h1.style.color=color;
            console.log(`Color change to ${color}`);
            resolve("Color changed");

        },delay);
    })
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
        await changeColor("yellow",1000);
        changeColor("orange",1000);
    }
    catch(err){
        console.log("Error caught:");
        console.log(err);

    }
    let a=5;
    console.log("New Number:",a+5);

}