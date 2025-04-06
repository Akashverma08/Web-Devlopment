function saveDb(data){
    return new Promise((resolve,reject)=>{
        let internetspeed=Math.floor(Math.random() *10)+1;
        if(internetspeed>4){
            resolve("Success1: data Saved");
        }
        else{
            reject("Failure1:Data Rejected");
        }
    })
}

let request=saveDb("Akash Verma");
request.then(()=>{
    console.log("Promise resolved");
    console.log(request);
})
.catch(()=>{
    console.log("Promise rejected");
    console.log(request);
})

