//One to few 

const mongoose=require("mongoose");

const {Schema}=mongoose;

main().then(()=>{
      console.log("Connect to MongoDB Successfully....")

    })
      .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new Schema({
    username:String,
    address:[
        {
        _id:false,
        location:String,
        city:String
        },
    ]
});

const User=mongoose.model("User",userSchema)

const addUser=async()=>{
    let user1=new User({
        username:"Akash",
        address:[{
        location:"Patparganj",
        city:"Delhi"
        },

        ]

    });
    user1.address.push({location:"WallStreet",city:"London"});
    let result=await user1.save();
    console.log(result);
    
}

addUser();