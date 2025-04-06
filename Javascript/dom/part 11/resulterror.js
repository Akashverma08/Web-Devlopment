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

saveDb("Akash")
    .then((result)=>{
        console.log("Data1 Saved");
        console.log("Result of Promise:",result);
        return saveDb("Verma");
    })
    .then((result)=>{
        console.log("Data2 Saved");
        console.log("Result of Promise:",result);
        return saveDb("hello");

    })
    .then((result)=>{
        console.log("data3 Saved");
        console.log("Result of promise:",result);
    })
    .catch((error)=>{
        console.log("Promises Rejected");
        console.log("Error of promise:",error);

    })
