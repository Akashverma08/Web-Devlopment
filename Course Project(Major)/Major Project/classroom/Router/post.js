const express=require("express");

const router=express.Router();


//post

//Index - post

router.get("/",(req,res)=>{
    res.send("Get for post");
})

//Show- post
router.get("/:id",(req,res)=>{
    res.send("Get for post ID");
})


//POST - post
router.post("/",(req,res)=>{
    res.send("POST for post");
})

//DELETE - post

router.delete("/:id",(req,res)=>{
    res.send("Delete for post ID");
});


module.exports=router;