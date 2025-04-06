/*function hello(){
    console.log("Inside Hello Function");
    console.log("HellO");

}

function demo(){
    console.log("Calling Hello ");
    hello();
}

console.log("Calling Demo");
demo();
console.log("Task Completed");*/

//visualize the stack

function one(){
    return 1;
}
function two(){
    return one()+one();

}

function three(){
    let ans=two()+one();
    console.log(ans);
}

three();



//JS is single Threaded

setTimeout(()=>{
    console.log("Hii,I am AKV");
},2000);

setTimeout(()=>{
    console.log("Nice to meet you");
},2000);

console.log("Hello....");