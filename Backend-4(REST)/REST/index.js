const express=require("express");
const app=express();
const port=8080;
const path=require("path");

const methodOverride = require('method-override');

const { v4: uuidv4 } = require('uuid');

app.use(methodOverride('_method'));


app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`Listening on port :${port}`);
})

let posts=[
    {
        id:uuidv4(),
        username:"Akash Verma",
        content:"I am a Engineering Student"
    },

    {
        id:uuidv4(),
        username:"IBM",
        content:"Give Frontend Engineer Intership"
    },

    {
        id:uuidv4(),
        username:"Saanvi Verma",
        content:"I am Btech Student "
    }

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})


app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
    

});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id !=p.id);
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
    
})