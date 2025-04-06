const express=require("express");
const app=express();
const port =8080;
const path=require("path");


//app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/ig/:username",(req,res)=>{
    /*const followers=["Akash","Arun","Shobit","Thomas"];
    let { username }=req.params;
    res.render("instagram.ejs",{username,followers});*/
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);

    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }


})


app.get("/rollDice",(req,res)=>{
    let dicVal=Math.floor(Math.random()*6 + 1);
    res.render("rolldice.ejs",{dicVal});
})


app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})