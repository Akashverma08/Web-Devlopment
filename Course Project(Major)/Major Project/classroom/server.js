const express=require("express");
const app=express();

const users=require("./Router/user.js");
const post=require("./Router/post.js");

//Cookie-Parser

const cookieParser = require('cookie-parser');

//Cookie-Parser Middleware
app.use(cookieParser("secretcode"));

app.get("/setcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("madeIn","India");
    res.send("We sent you Cookies");
})


app.get("/greet",(req,res)=>{
    let {name="anonymous"}=req.cookies;
    res.send(`Hii,${name}`);
})

//Signed Cookies

app.get("/getsignedcookies",(req,res)=>{
    res.cookie("madeIn","India",{signed:true});
    res.send("Signed Cookies");
})


//Verify Signed cookies
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("Verification");
})


app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("Hii,I am Root");
})

app.use("/users",users);


app.use("/post",post);

app.listen(3000,()=>{
    console.log("Server is listening on 3000");
})