const express=require("express");
const app=express();
let port=8080;

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);

});

/*app.use((req,res)=>{
    console.log("Request Recived");
    let code="<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>";
    res.send(code);
});*/

//Routing

/*app.get("/",(req,res)=>{
    res.send("You contacted root Path");
});

app.get("/apple",(req,res)=>{
    res.send("Hello You change the path");
});

app.get("/apple",(req,res)=>{
    res.send("You contacted Apple Path");
});

app.get("/orange",(req,res)=>{
    res.send("You contacted Orange Path");
});

app.get("*",(req,res)=>{
    res.send("Path are not Found");
});

/*app.get("/cpple",(req,res)=>{
    res.send({
        name:"Apple",
        color:"red",
    });
});*/


/*app.post("/",(req,res)=>{
    res.send("You send a post request to route");
}) */

//Path Parameter

app.get("/:username/:id",(req,res)=>{
    //console.log(req.params);
    //res.send("You enter username path");
    let {username,id}=req.params;
    let htmlStr=`<h1>Welcome to our website ${username}</h1>`
    res.send(htmlStr);

});

app.get("/search",(req,res)=>{
    //console.log(req.query);
    //res.send("Query search successfully");
    let {q}=req.query;
    if(!q){
        res.send("Nothing is Searched");
    }
    res.send(`<h1>You serach the Query : ${q}</h1>`);
})