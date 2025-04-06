const express=require("express");
const app=express();

const mongoose = require('mongoose');


const path=require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));


var methodOverride = require('method-override');


const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(methodOverride('_method'));


main()
    .then(()=>{
    console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

}

//Mongo DB Chat creation
/*let chat1=new Chat({
    from:"Akash",
    to:"Saanvi",
    msg:"Hello",
    created_at:new Date()

});


chat1.save().then((res)=>{
    console.log(res);
})*/

app.listen(8080,()=>{
    console.log("Server is listening at 8080");
});




//Index Route
app.get("/chats",async(req,res)=>{
    let c=await Chat.find();
    //res.send("Getting all Chats");
    //console.log(c);
    res.render("index.ejs",{c});
});

//New Route 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//Create Route

app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    });
    console.log(newChat);
    newChat.save().then((res)=>{
        console.log("Data Save SuccessFully");
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
});


//Edit Route

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update Route

app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");


})


//DELETE Route

app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");

})

app.get("/",(req,res)=>{
    res.send("Working");
});