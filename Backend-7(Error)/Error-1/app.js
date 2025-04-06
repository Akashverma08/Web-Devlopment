const express=require("express");
const app=express();

const ExpressError=require("./ExpressError");


const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError (401,"Access Denied");

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

app.get("/err",(req,res)=>{
    abcd=abcd;
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden");
})


app.use((err,req,res,next)=>{
    let {status=500,message="some error occurs"}=err;
    res.status(status).send(message);
})

/*app.use((err,req,res,next)=>{
    console.log("-----Error------");
    res.send(err);
});*/



/*app.use((err,req,res,next)=>{
    console.log('-----Error2-----');
    next(err);
})*/


//app.use CALLBACKS

/*app.use((req,res)=>{
    res.status(404).send("Page Not Found");
})*/

app.listen(8080,()=>{
    console.log("Listening on port 8080");
})