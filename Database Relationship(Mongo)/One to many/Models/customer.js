//One to many

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



const orderSchema=new Schema({
    item:String,
    price:Number,
});




const customerSchema=new Schema({
    name:String,
    orders:[{
        type: Schema.Types.ObjectId, 
        ref: 'Order',
    }]
})


/*customerSchema.pre("findOneAndDelete",async()=>{
    console.log("Pre Middleware");
})*/

customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res=await Order.deleteMany({_id:{$in:customer.orders}})
        console.log(res);
    }
})


const Order=mongoose.model("Order",orderSchema);

const Customer=mongoose.model("Customer",customerSchema);




const addCustomer=async()=>{
    let cust1=new Customer({
        name:"Akash",

    });

    let order1=await Order.findOne({item:"Samosa"});
    let order2=await Order.findOne({item:"Chips"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result=await cust1.save();
    console.log(result);
}


//addCustomer();




const addOrder=async ()=>{
    await Order.insertMany([
        {item:"Samosa",price:12},
        {item:"Chips",price:20},
        {item:"Chocolate" ,price:10}
    ])
}

//addOrder();

/*const delOrder=async()=>{
    await Customer.findByIdAndDelete('67b0e69addc2e2df6215d071');
}

delOrder();*/

// ------------------------------------Handling Deletion ---------------------------------------------------


const addCust=async()=>{
    let newCust=new Customer({
        name:"Shobit"
    });

    let newOrder= new Order({
        item:"Burger",
        price:250
    })

    newCust.orders.push(newOrder);
    

    await newOrder.save();
    await newCust.save();
    console.log('Added new Customer ');




}

//addCust();


const delCust= async ()=>{
    let data =await Customer.findByIdAndDelete('67b0e734ae7e33c83c3ec249');
    console.log(data);
}

delCust();