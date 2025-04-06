const express=require("express");

const router=express.Router();

const asyncWrap=require("../utils/wrapAsync.js");

const ExpressError=require("../utils/ExpressError.js");


const {listingSchema}=require("../schema.js");
const Listing=require("../model/listing.js");





//VALIDATESCHEMA FORR SERVER SIDE VALIDATION ERROR HANDLING USING JOI 

const validateSchema=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

//INDEX ROUTE
router.get("/",asyncWrap(async (req,res,next)=>{
    const allListing=await Listing.find({});
    res.render("listings/index.ejs",{allListing});
}));


//NEW ROUTE

router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
})


//SHOW ROUTE

router.get("/:id",asyncWrap(async(req,res,next)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error", "Listing you accessed does not exist.....");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
  })
);



//Create Route
router.post("/",validateSchema,asyncWrap(async(req,res,next)=>{


        //let{title,description,image,price,location,price,country}=req.body;
        //let listing=req.body.listing;
        /*const result=listingSchema.validate(req.body);
        if(result.error){
            throw new ExpressError(400,result.error);
        }*/
        /*if(!req.body.listing){
            throw new ExpressError(400,"Send Valid Listing");
        }*/
        const newListing= await Listing(req.body.listing);



        /*if(!newListing.title){
            throw new ExpressError(400,"Title is missing");
        }*/
        
        //console.log(listing);
        await newListing.save();
        req.flash("success","New Listing Created");
        res.redirect("/listing");


    
    

}));

//EDIT ROUTE LISTING

router.get("/:id/edit",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing You access does not exist.....");
        res.redirect("/listings");
    }
    req.flash("success","Listing Updated");
    res.render("listings/edit.ejs",{listing});

}));

//UPDATE THE LISTING

router.put("/:id",validateSchema,asyncWrap(async(req,res)=>{
    /*if(!req.body.listing){
        throw new ExpressError(400,"Send Valid Data for Listing");
    }*/
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    //res.redirect("/listing");
    res.redirect(`/listing/${id}`);

}));







//DELETE ROUTE

router.delete("/:id",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let deletedList=await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    req.flash("success","Listing Deleted");
    res.redirect("/listing");

}));



module.exports=router;