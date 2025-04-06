const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");

const ejsMate=require("ejs-mate");

//const asyncWrap=require("./utils/wrapAsync.js");

const ExpressError=require("./utils/ExpressError.js");


//const {listingSchema,reviewSchema}=require("./schema.js");
//const Listing=require("./model/listing.js");
//const Review=require("./model/review.js");
//Express Route


const listing=require("./routes/listing.js");

const review=require("./routes/review.js");

const session=require("express-session");
const flash=require("connect-flash");
// use ejs-locals for all ejs templates:
app.engine('ejs',ejsMate);

app.set('views', path.join(__dirname,'views'));//USE FOR EJS FILE
app.set('view engine','ejs');// TAKE EJS FILE FROM VIEWS FILE

app.use(express.urlencoded({ extended: true }));//req.params
app.use(express.static(path.join(__dirname, '/public')));//USE for access public css and js file




const methodOverride = require('method-override');
//const wrapAsync = require("./utils/wrapAsync.js");
app.use(methodOverride('_method'));
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";



main().then(()=>{
    console.log("Connected to DB");
    }).catch((err)=>{
        console.log(err);
    }); 


async function main(){
    await mongoose.connect(MONGO_URL);
}

//Session Cookies

const sessionOptions={
    secret:"mysecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};

app.use(session(sessionOptions))

app.use(flash())

app.get("/",(req,res)=>{
    res.send("Working on Root");
});

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next()
})



app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});

//USING EXPRESS ROUTE TO HANDLE ROUT METHOD IN SEEPARATE FOLDER ROUTES WHICH NAME IS listing.js
app.use("/listing",listing);



app.use("/listing/:id/reviews",review);


//Middleware for unexpected call

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));

});


//ADD MIDDLEWARE TO HANDLE ERROR

app.use((err,req,res,next)=>{
    let {statusCode=500,message='Something went Wrong'}=err;
    res.status(statusCode).render("error.ejs",{err});
})

//VALIDATESCHEMA FORR SERVER SIDE VALIDATION ERROR HANDLING USING JOI 

/*const validateSchema=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}*/

//Server Side Validation for Reviw Page using Joi 
/*const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}*/


//Getting Schema From listing.js file
/*app.get("/listing",async (req,res)=>{
    let sampleList=new Listing({
        title:"My Villa",
        description:"By the beach",
        price:12000,
        location:"Goa",
        country:"India"
    });
    await sampleList.save();
    console.log("Sample was saved");
    res.send("Successfully Saved");
});*/

//INDEX ROUTE
/*app.get("/listing",asyncWrap(async (req,res,next)=>{
    const allListing=await Listing.find({});
    res.render("listings/index.ejs",{allListing});
}));*/


//NEW ROUTE

/*app.get("/listing/new",(req,res)=>{
    res.render("listings/new.ejs");
})*/


//SHOW ROUTE

/*app.get("/listing/:id",asyncWrap(async(req,res,next)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));*/



//Create Route
//app.post("/listing",validateSchema,asyncWrap(async(req,res,next)=>{


        //let{title,description,image,price,location,price,country}=req.body;
        //let listing=req.body.listing;
        /*const result=listingSchema.validate(req.body);
        if(result.error){
            throw new ExpressError(400,result.error);
        }*/
        /*if(!req.body.listing){
            throw new ExpressError(400,"Send Valid Listing");
        }*/


        //const newListing= await Listing(req.body.listing);



        /*if(!newListing.title){
            throw new ExpressError(400,"Title is missing");
        }*/
        
        //console.log(listing);
        /*await newListing.save();
        res.redirect("/listing");


    
    

}));*/

//EDIT ROUTE LISTING

/*app.get("/listing/:id/edit",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});

}));*/

//UPDATE THE LISTING

//app.put("/listing/:id",validateSchema,asyncWrap(async(req,res)=>{
    /*if(!req.body.listing){
        throw new ExpressError(400,"Send Valid Data for Listing");
    }*/
    /*let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    //res.redirect("/listing");
    res.redirect(`/listing/${id}`);

}));*/







//DELETE ROUTE

/*app.delete("/listing/:id",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let deletedList=await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    res.redirect("/listing");

}));*/



//Reviews

//Post Route

/*app.post("/listing/:id/reviews",validateReview,wrapAsync(async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("Review Saved");
    //res.send("Review Saved");
    res.redirect(`/listing/${listing._id}`);


}));*/

//DELETE REVIEWS USING PULL OPERATOR
/*app.delete("/listing/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listing/${id}`);
}));*/



//Middleware for unexpected call

/*app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));

});*/


//ADD MIDDLEWARE TO HANDLE ERROR

/*app.use((err,req,res,next)=>{
    let {statusCode=500,message='Something went Wrong'}=err;
    res.status(statusCode).render("error.ejs",{err});
})*/

/*app.use((err,req,res,next)=>{
    let {statusCode=500,message="Soemething went Wrong"}=err;
    res.status(statusCode).send(message);
})*/