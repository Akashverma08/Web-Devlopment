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
    .then(()=>{
        console.log("Data1 Saved");
        return saveDb("Verma");
    })
    .then(()=>{
        console.log("Data2 Saved");
    })
    .catch(()=>{
        console.log("Promises Rejected")

    })
