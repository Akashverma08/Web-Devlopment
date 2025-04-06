const express=require("express");
const app=express();

const users=require("./Router/user.js");
const post=require("./Router/post.js");

const path=require("path");

app.set('views', path.join(__dirname,'views'));//USE FOR EJS FILE
app.set('view engine','ejs');// TAKE EJS FILE FROM VIEWS FILE

const session = require('express-session');


const sessionOption={
    secret:"mysupersecretstring",
    resave:true,
    saveUninitialized:false}


const  flash = require('connect-flash');


app.use(session(sessionOption));
app.use(flash());

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name==="anonymous"){
        req.flash("error","User not registered");
    }else{
        req.flash("success","user registered successfully");
    }
    res.redirect("/hello");
    //res.send(name);

})

app.get("/hello",(req,res)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");

    res.render("page.ejs",{name:req.session.name});
    //console.log(req.session);
    
    //res.send(`Hello ,${req.session.name}`);
})


app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    res.send(`You sent a request ${req.session.count} times`);
})


app.get("/test",(req,res)=>{
    res.send("Test Successful");
})


app.listen(4000,()=>{
    console.log("Server is listening on 4000");
})