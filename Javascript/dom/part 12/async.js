async function greet(){
    //throw "404 page not found"
    return "hello";
}

greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("Result:",result);
})
.catch((err)=>{
    console.log("Promise was rejected due to error:",err);
})