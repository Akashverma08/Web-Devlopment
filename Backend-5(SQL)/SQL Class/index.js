//Create or generate fake data
const { faker } = require('@faker-js/faker');

//Get the Client
const mysql=require('mysql2');

//get express packages
const express=require("express");

const path=require("path");

const app=express();

//Acquire method override pacakages for PATCH and PUT action

const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


//Acquire EJS template file
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

const port=8080;


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Akash@0401',
    database: 'practice_app'
 });


/* let getRandomUser=()=>{
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
};

let i="INSERT INTO user (id,username,email,password) VALUES ?"

let data=[];

for(let i=1;i<=100;i++){
    data.push(getRandomUser());//generate 100 fake user using faker npm packages
}



try{
    connection.query(i,[data],(err,result)=>{
        if (err) throw err;
        console.log(result);

    
    })
    
}catch(err){
    console.log(err);
} 

connection.end();*/




//INSERTING THE DATA

//let i="INSERT INTO user (id,username,email,password) VALUES(?,?,?,?)"
//let user=["1","Akash","akash@gmail.com","1234"];


//For multiple insertion query syntax
/*let i="INSERT INTO user (id,username,email,password) VALUES ?"

let users=[["2","Arun","arun@gmail.com","4321"],["3","Nikhil","nikhil@gmail.com","5555"]];

try{
    connection.query(i,[users],(err,result)=>{
        if (err) throw err;
        console.log(result);

    
    })
    
}catch(err){
    console.log(err);
} 

connection.end();*/





//Simple Query
/*let q="SHOW TABLES"
try{
    connection.query(q,(err,result)=>{
        if (err) throw err;
        console.log(result);
        console.log(result[0]);
        console.log(result[1]);
        console.log(result.length);

    
    })
    
}catch(err){
    console.log(err);
} */



//& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -h localhost -u root -p


/*let getRandomUser=()=>{
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
};*/
//console.log(getRandomUser());



//ROUNTING

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});

//COUNT TOTAL NUMBER OF USER IN TABLE
app.get("/",(req,res)=>{
    let q=`SELECT COUNT(*) FROM user `;
    try{
        connection.query(q,(err,results)=>{
            if(err) throw err;
            //res.send("success");
            //console.log(results[0]['COUNT(*)']);
            let count=results[0]['COUNT(*)'];
            res.render("home.ejs",{count});
            console.log("success");
        })
    }catch(err){
        console.log("Error",err);
    }
});


//FETCH AND SHOW ALL USER IN TABLE FORMAT
app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            console.log("success");
            //res.send(users);
            res.render("showuser.ejs",{users});
        });
    }catch(err){
        res.send("Some error Occured");
    }
});



//UPDATING THE ROUTE
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            let user=result[0];
            //res.send(users);
            res.render("edit.ejs",{user});
        });
    }catch(err){
        res.send("Some error Occured");
    }
    
    console.log(id);
})


//UPDATE DATABASE ROUTE USING PATH REQUEST

//BEFORE MAKING THIS ROUTE MAKE SURE YOU USES THIS PATCH FOR METHOD OVERRIDE

//npm i method-override

/*Acquire method override pacakages for PATCH and PUT action

const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));*/

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formPass,username:newUsername}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            if(formPass!=user.password){
                res.send("WRONG PASSWORD");

            }

            else{
                let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                try{
                    connection.query(q2,(err,result)=>{
                        if(err) throw err;
                        res.redirect("/user");

                    })
                }catch(err){
                    res.send("Error");
                }
            }
           
        });
    }catch(err){
        res.send("Some error Occured");
    }
})



//ADD NEW USER

app.get("/user/add", (req, res) => {
    res.render("add.ejs"); // Render the form for adding a new user
});

// Handle form submission to add a new user
app.post("/user/add", (req, res) => {
    const { id,username, password, email } = req.body; // Form data
    let q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${username}','${password}','${email}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.redirect("/user");
        })
        }catch(err){
            console.log("There some error");
    }

    
});




//DELETE THE USER
app.get("/user/:id/delete", (req, res) => {
    const { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user }); // Render the delete confirmation page
        });
    } catch (err) {
        res.send("Some error occurred.");
    }
});


app.delete("/user/:id/delete", (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    // Query to get the user by ID
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            // Verify if the password is correct
            if (username !== user.username || password !== user.password) {
                res.send("Incorrect username or password.");
            } else {
                // Query to delete the user
                let q2 = `DELETE FROM user WHERE username='${username}' AND password='${password}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user"); // Redirect to the user list after successful deletion
                });
            }
        });
    } catch (err) {
        res.send("Error deleting user.");
    }
});