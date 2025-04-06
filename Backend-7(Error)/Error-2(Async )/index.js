const express=require("express");
const app=express();

const mongoose = require('mongoose');


const path=require("path");

const ExpressError=require("./ExpressError.js");

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
  await mongoose.connect('mongodb://127.0.0.1:27017/FakeWhatsapp');

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

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}






//Index Route
//Using asyncWrap to handle error

app.get("/chats",asyncWrap(async(req,res,next)=>{
        let c=await Chat.find();
        //res.send("Getting all Chats");
        //console.log(c);
        if(!c.length){
            next(new ExpressError(404,"No Chats Found"));
        }
        res.render("index.ejs",{c});

        })
)




//Using Try and Catch method
/*app.get("/chats",async(req,res,next)=>{
    try{
        let c=await Chat.find();
        //res.send("Getting all Chats");
        //console.log(c);
        if(!c.length){
            next(new ExpressError(404,"No Chats Found"));
        }
        res.render("index.ejs",{c});

    }catch(err){
        next(err);
    }
    
});*/

//New Route 
//Using asyncWrap to handle error
app.get("/chats/new",asyncWrap((req,res,next)=>{
        //throw new ExpressError(500,"PageNotFound");
        res.render("new.ejs");
    
}));


//Using Try and Catch to handle async error
/*app.get("/chats/new",(req,res,next)=>{
    try{
        //throw new ExpressError(500,"PageNotFound");
        res.render("new.ejs");

    }catch(err){
        next(err);
    }
    
}); */

//Show-New Route
//Using asyncWrap
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(404, "Chat not Found"));
        }
        res.render("edit.ejs", { chat });
    
}));



//Using try and catch for error handling
/*app.get("/chats/:id", async (req, res, next) => {
    try{
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(404, "Chat not Found"));
        }
        res.render("edit.ejs", { chat });

    }catch(err){
        next(err);
    }
    
});*/ 




//Create Route
//Use asyncwrap to handle error
app.post("/chats", asyncWrap(async (req, res, next) => {
        let { from, msg, to } = req.body;  // Extracting form data
        
        let newChat = new Chat({
            from,
            msg,
            to,
            created_at: new Date()
        });

        await newChat.save();  // Await saving to MongoDB
        console.log("Data Saved Successfully");

        res.redirect("/chats");  // Redirect to the chat list
}));


//Try and catch block to handle error
/*
app.post("/chats", async (req, res, next) => {
    try {
        let { from, msg, to } = req.body;  // Extracting form data
        
        let newChat = new Chat({
            from,
            msg,
            to,
            created_at: new Date()
        });

        await newChat.save();  // Await saving to MongoDB
        console.log("Data Saved Successfully");

        res.redirect("/chats");  // Redirect to the chat list
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
});
*/ 



//Edit Route
//Using asyncWrap to handle Error
app.get("/chats/:id/edit",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        let chat=await Chat.findById(id);
        res.render("edit.ejs",{chat});
    
}));

//Use try and catch block
/*
app.get("/chats/:id/edit",async (req,res,next)=>{
    try{
        let {id}=req.params;
        let chat=await Chat.findById(id);
        res.render("edit.ejs",{chat});

    }catch(err){
        next(err);
    }
    
}); */






//Update Route
//Using asyncWrap to handle Error

app.put("/chats/:id",asyncWrap(async(req,res,next)=>{
        let {id}=req.params;
        let {msg:newMsg}=req.body;
        let updatedChat=await Chat.findByIdAndUpdate(
            id,
            {msg:newMsg},
            {runValidators:true,new:true}
        );
        console.log(updatedChat);
        res.redirect("/chats");
    

}))

//Using try and catch block
/* 
app.put("/chats/:id",async(req,res,next)=>{
    try{
        let {id}=req.params;
        let {msg:newMsg}=req.body;
        let updatedChat=await Chat.findByIdAndUpdate(
            id,
            {msg:newMsg},
            {runValidators:true,new:true}
        );
        console.log(updatedChat);
        res.redirect("/chats");


    }catch(err){
        next(err);

    }
    

})
*/

//DELETE Route
//Using asyncWrap to handle Error
app.delete("/chats/:id",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        let deletedChat=await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    

}))

//Using try and catch block

/* 
app.delete("/chats/:id",async (req,res,next)=>{
    try{
        let {id}=req.params;
        let deletedChat=await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");

    }catch(err){
        next(err);
    }
    

})*/






app.get("/",(req,res)=>{
    res.send("Working");
});

//Error Handling Middleware for Mongoose error

const handleValidationError=(err)=>{
    console.log("This was a Validation error.");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name=="ValidationError"){
        err=handleValidationError(err);
    }
    next(err);
});



//Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some Error Occured"}=err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("Server is listening at 8080");
});