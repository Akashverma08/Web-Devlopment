const express=require("express");
const app=express();


app.use((req,res,next)=>{
    console.log("Hii,I am Middleware");
    //res.send("Middleware Finished");
    next()
});

app.use((req,res,next)=>{
    console.log("Hii,I am Middleware 2");
    //res.send("Middleware Finished");
    next()
});


app.get("/",(req,res)=>{
    res.send("hii,I am root")
});

app.get("/random",(req,res)=>{
    res.send("hii,I am random")
});


app.listen(8080,()=>{
    console.log("Listening on port 8080");
})