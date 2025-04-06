let urlt="https://dog.ceo/api/breeds/image/random";
let btns=document.querySelector("#dog");
btns.addEventListener("click",async()=>{
    let link=await getImage();
    let img=document.querySelector("#result2");
    img.setAttribute("src",link); 
})

async function getImage(){
    try{
        let res=await axios.get(urlt);
        return res.data.message;
    }
    catch(err){
        console.log("Error:  ",err);
        return "No Image";
    }

}