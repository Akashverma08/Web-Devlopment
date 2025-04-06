const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const User=mongoose.model("User",userSchema);

//USE DELETE METHOD TO DELETE THE DATA

User.deleteOne({name:"Arav"}).then((res)=>{
    console.log(res);
});

User.deleteMany({age:21}).then((res)=>{
    console.log(res);
})
//USE UPDATE METHOD TO UPDATE THE DATA

/*User.updateOne({_id:"6776e424f047139010590bd0"},{name:"Akash Verma"}).then((res)=>{
    console.log(res);
});

User.updateMany({age:{$gt : 30}},{age:33}).then((res)=>{
    console.log(res);
});

User.findOneAndUpdate({name:"Akash Verma"},{email:"akv@gmail.com"}).then((res)=>{
    console.log(res);
})

User.findByIdAndUpdate("6776e424f047139010590bd0",{age:22}).then((res)=>{
    console.log(res);
});*/

//USE FIND METHOD TO FETCH DATA FROM MONGODB

/*User.find({age:{$gte :32}}).then((data)=>{
    console.log(data[0].name);
});*/

/*User.findById("6776e4a275766a1e073ee94e").then((res)=>{
    console.log(res);
})*/





/*const user1=new User({
    name:"Akash",
    email:"akash@gmail.com",
    age:21

})

user1.save();


const user2=new User({
    name:"Arav",
    email:"arav@gmail.com",
    age:32
})

user2.save().then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})


//INSERT MANY DOCS IN MONGODB
User.insertMany([
    {name:"Parth",email:"parth@gmail.com",age:22},
    {name:"Raghav",email:"raghav@gmail.com",age:32},
    {name:"Vinay",email:"vinay@gmail.com",age:27},
]).then((res)=>{
    console.log(res);
});*/