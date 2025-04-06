//One to many(one to squillions)

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
    email:String,
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

});

const User=mongoose.model("User",userSchema);

const Post=mongoose.model("Post",postSchema);

const addData=async ()=>{
    /*let  user1=new User({
        username:"Akash Verma",
        email:"akash@gmail.com"
    })*/

    let user=await User.findOne({username:"Akash Verma"});

    let post2=new Post({
        content:"Bye Bye",
        likes:28,
        
    });

    post2.user=user;
    //await user1.save();
    //await post.save();

    await post2.save();

}

//addData();


const getData=async()=>{
    let result=await Post.findOne({}).populate("user");
    console.log(result);
}

getData();