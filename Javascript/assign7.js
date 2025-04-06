//Question 1
let arr=[2,3,6,7];

let total=0;
const getAvg=(arr)=>{
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total/arr.length;
}

//question 2
let n=11;

const isEven=(n)=>{
    if(n%2==0){
        return console.log("Number is Even");
    }
    else{
        return console.log("Number is not even");
    }
}

//question 3
const object={
    message:"Hello World",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);

//question 4
let length=4;
function callback(){
    console.log(this.length);
}
const object1={
    length:5,
    method(callback){
        callback();
    },


};

object1.method(callback,1,2);