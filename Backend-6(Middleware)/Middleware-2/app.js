const express=require("express");
const app=express();

//CREATEUTILITY MIDDLEWARE_LOGGER FILE
app.use((req,res,next)=>{
    req.time=new Date(Date.now());
    console.log(req.method,req.hostname,req.time);
    next()
});



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