let n=[1,2,3,4,5];
let square=n.map((el)=> el*el);
console.log(square);

let sum=n.reduce((s,el)=>{
    return s+el;
});
console.log(sum);

let avg=sum/n.length;
console.log(avg);


//question 2

let arr=[2,3,4,5];
let newArr=arr.map((el)=> el+5);
console.log(newArr);

//Question 3
let str=["akash","saanvi","shobit"];
let newStr=str.map((el)=> el.toUpperCase());
console.log(newStr);


//Question 4
let doubleAndReturnArgs=(ar,...a)=>[
    ...a,
    ...a.map((el)=> el*2),
]

//question 5

let mergeObjects= (obj1,obj2)=>(
    {...obj1,...obj2}
);

