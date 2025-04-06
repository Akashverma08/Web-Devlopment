const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low for selling"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["Fiction","Non-Fiction"],
    }
    
});

const book=mongoose.model("book",bookSchema);

const book1=new book({
    title:"D.C.",
    author:"Batman",
    price:"70",
    category:'Fiction',
});

/*book1.save().then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});*/

book.findByIdAndUpdate("67783b0a6c9236bcb00fc1e0",{price:-500},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err.errors.price.properties.message);
})