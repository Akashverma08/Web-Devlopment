const express=require("express");

const router=express.Router({mergeParams:true});

const wrapAsync = require("../utils/wrapAsync.js");

const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");

const Review=require("../model/review.js");
const Listing=require("../model/listing.js");

//Server Side Validation for Reviw Page using Joi 
const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}



//Reviews

//Post Route

router.post("/",validateReview,wrapAsync(async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("Review Saved");
    //res.send("Review Saved");
    req.flash("success","Review Saved");
    res.redirect(`/listing/${listing._id}`);


}));

//DELETE REVIEWS USING PULL OPERATOR
router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");

    res.redirect(`/listing/${id}`);
}));


module.exports=router;