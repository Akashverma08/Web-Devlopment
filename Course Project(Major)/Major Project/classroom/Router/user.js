const express=require("express");

const router=express.Router();

//USERS

//Index - users

router.get("/",(req,res)=>{
    res.send("Get for Users");
})

//Show-users
router.get("/:id",(req,res)=>{
    res.send("Get for user ID");
})


//POST - users
router.post("/",(req,res)=>{
    res.send("POST for users");
})

//DELETE -users

router.delete("/:id",(req,res)=>{
    res.send("Delete for user ID");
});


module.exports=router;