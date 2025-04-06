const express=require("express");
const app=express();


const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new Error ("Access Denied");

})


app.get("/api",checkToken,(req,res)=>{
    res.send("Data Accessed Successfully");
})



app.get("/",(req,res)=>{
    res.send("hii,I am root")
});

app.get("/random",(req,res)=>{
    res.send("hii,I am random")
});

//app.use CALLBACKS

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
})

app.listen(8080,()=>{
    console.log("Listening on port 8080");
})