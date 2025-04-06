const student ={
    name:"Akash Verma",
    age:21,
    eng:98,
    phy:95,
    maths:97,
    getAvg(){
        let avg=(this.eng+this.phy+this.maths)/3;
        console.log(`${this.name} got ${avg} marks`);
    }
}

//try and catch

console.log("hello");
console.log("hello");
//let a=10;
try{
    console.log(a);
}catch(err){
    console.log("Caught an error.... a is not defined");
    console.log(err);
}

console.log("Akash Verma");

//arrow function
const hello=() =>{
    console.log("hello");
};

const s=(a,b)=>{
    return a+b;
};

//Implict return
const mul=(a,b)=>(a*b);

//setTimeout function

console.log("Hi Everyone");

setTimeout( ()=>{
    console.log("Akash Verma");
},4000);

console.log("My Name is");

//SetInterval function

let id=setInterval (()=>{
    console.log("White Devil..");
},3000);

let id2=setInterval(()=>{
    console.log("Joker");
},5000);

//this with arrow function
const studentInfo={
    name:"Akash",
    marks:98,
    prop:this,
    getName:function(){
        console.log(this);//global scope
        return this.name;

    },
    getMarks: ()=>{
        console.log(this);//parent scope-> window
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=>{//student
            console.log(this);
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){//window
            console.log(this);
        },2000);
    }
};



//question 
const sq=(n)=>{
    return n*n;
};

//question 2

let id3= setInterval(()=>{
    console.log("hello World");
},2000);

setTimeout(()=>{
    clearInterval(id3);
    console.log("Interval is complete");
},10000);