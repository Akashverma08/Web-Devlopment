function isAdult(){
    let age=19;
    if(age< 18){
        console.log("Not Adult");
    }
    else{
        console.log("Person is Adult");
    }
}
isAdult();


function isPoem(){
    console.log("Jhonny Jhonny Yes Papa");
    console.log("Eating Sugar No Papa");
    console.log("Telling a Lie,No Papa");
    console.log("Open Your Mouth");
    console.log("Ha ha ha Ha");

}

isPoem();


function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


//Arguments

function table(n){
    for(let i=1;i<=10;i++){
        console.log(n,"X",i,"=",n*i);
    }
}
table(2);

function nameInfo(name,age){
    console.log(`${name} is ${age} years old`);
}
nameInfo("Akash",21);
nameInfo("Shobit",23);


// question 3

function avgThree(a,b,c){
    let s;
    s=(a+b+c)/3;
    console.log(`Average of 3 Number is : ${s}`);
}

avgThree(4,8,10);


// return function

function sum(a,b){
    console.log("hello");
    return a+b;
    console.log("Hii");
}

console.log(sum(sum(1,5),7));

//question 4

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

//question 5

let str=["Aaye","ooye","Hoye","Baado","Baadi","Baado","Baadi"];

function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

//Scopes

let sum1=56;//Global Scope

function calSum(a,b){
    let sum1=a+b;//Function Scope
    console.log(sum1);
}

calSum(3,4);

//Lexical Scope

function outerFunc(){
    let x=8;
    let y=9;
    function innerFunc(){//Function Scope
        let a=10;
        console.log(x);
        console.log(y);

    }
    //console.log(a);
    innerFunc();
}


//question 6

let greet="hello";

function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet();
}

console.log(greet);
changeGreet();



//function expression

let s=function(a,b){
    return a+b;
}

// High order function
function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let wel=function(){
    console.log("Hello");

}
multipleGreet(wel,2);


//high order return function

function OddEvenFactory(request){
    if(req=="odd"){
        return function(n){
            console.log(!(n%2==0));

        }
    }
    else if(req=="Even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}

let req='odd';

//Methods

const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}

