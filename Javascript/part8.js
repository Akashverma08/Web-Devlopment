let arr=[9,8,6,4,1];

/*arr.forEach(function(el){
    console.log(el);
});*/

let print=(el=>{
    console.log(el);});
arr.forEach(print);

let stud=[{
    name:"Akash",
    Marks:93
    },
   {
    name:"Shobit",
    Marks:96

   },
   {
    name:"Saanvi",
    Marks:87

   }
];
stud.forEach((student)=>{
    console.log(student.name);
});


//Map 
let num=[1,2,3,4,5];

let double=num.map((el)=>{
    return el*el;
});

let newArr=stud.map((el)=>{
    return el.Marks/10;
});


//filter
let nums=[2,4,3,1,9,8];

let n=nums.filter((el)=>{
    return el%2==0;
});

//every
let x=[1,2,4,6,7];
let y=x.every((el)=>(el%2==0));
//some
let z=x.some((el)=>(el%2==0));
//reduce
let w=x.reduce((res,el)=>{
    console.log(res);
    return res+el;
});
console.log(w);

//Maximum array using reduce

let r=[1,4,100,23,6,5,34];
let max=r.reduce((ans,el)=>{
    if(ans<el){
        return el;
    }
    else{
        return ans;
    }
});
console.log(max);

//question 1
let mul=[12,10,30,100,40];
let res=mul.every((el)=>{
    return el%10==0;
});
console.log(res);

//question 2
let min=r.reduce((ans,el)=>{
    if(ans>el){
        return el;
    }
    else{
        return ans;
    }
});
console.log("Minimum Array:",min);

//default parameter 

function sum(a,b=6){
    return a+b;
}
sum(2);

let a=[2,3,4,5,6];
let na=[...a];
console.log(na);

let even=[2,4,6,8,10];
let odd=[1,3,5,7,9];
let u=[...odd,...even];

//spread using object literals

const data={
    email:"akash@gmail.com",
    password:786,
};
const dataCopy={...data,id:77,city:"Delhi"};

const obj={...a};


//rest
function s(...args){
    return args.reduce((sum,el)=> sum+el);
};

function great(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{ return min;}
    });
};


//Destructing

let names=["tony","Akash","Chris","Shobit","sss","xyz","mnl"];
let [winner,runnerup,secondrunnerup,...others]=names;
//object literals
const studInfo={
    name:"AKASH",
    age:21,
    sub:["English","Physics","Maths"],
    password:"786",
    username:"akash@123",
    city:"pune"
};
let {username:user,password:code,city:location="Delhi"}=studInfo;
