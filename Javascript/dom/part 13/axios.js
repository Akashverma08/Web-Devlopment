let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact=await getFacts();
    //console.log(fact);
    let pr=document.querySelector("#result");
    pr.innerText=fact;

})
let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log("Error:  ",err);
        return "No Fact Found";
    }

}



let urlt="https://dog.ceo/api/breeds/image/random";
let btns=document.querySelector("#dog");
btns.addEventListener("click",async()=>{
    let link=await getFact();
    //console.log(fact);
    let img=document.querySelector("#result2");
    img.setAttribute("src",link);
    
})

async function getFact(){
    try{
        let res=await axios.get(urlt);
        return res.data.message;
    }
    catch(err){
        console.log("Error:  ",err);
        return "No Image Found";
    }

}