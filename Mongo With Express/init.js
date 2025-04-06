const mongoose = require('mongoose');

const Chat=require("./models/chat.js");

main()
    .then(()=>{
    console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

}

let allChat=[
    {
    from:"Akash",
    to:"Saanvi",
    msg:"Hello",
    created_at:new Date()
    },
    {
        from:"Arun",
        to:"rahul",
        msg:"send me notes",
        created_at:new Date()
    },
    {
        from:"Satyam",
        to:"Deepak",
        msg:"Hii How are you",
        created_at:new Date()
    },
    {
        from:"Arav",
        to:"Geeta",
        msg:"Happy Birthday",
        created_at:new Date()
    },
    {
        from:"Akash",
        to:"Aditi",
        msg:"send me the project link",
        created_at:new Date()
    },
    {
        from:"anoop",
        to:"rajiv",
        msg:"Do you want any intership",
        created_at:new Date()
    }
];


Chat.insertMany(allChat);