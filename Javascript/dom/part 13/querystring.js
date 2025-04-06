let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colleg= await getCollege(country);
    console.log(colleg);
    showArr(colleg);


})

function showArr(colleg){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleg){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
    try{
        let res=await axios.get(url+country);
        return res.data;

    }
    catch(err){
        return "Not Found";
    }

}