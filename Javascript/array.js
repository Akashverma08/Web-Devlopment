student=["Akash","Ankush","Anjali"];

let str=prompt("Enter string");

if (str.length==0){
    console.log("String is empty");
}

else{
    console.log("String is not empty");
}


// question 4

let index="AkasHVerMa";
let n=3;


if (index[n].toLowerCase()==index[n]){
    console.log("It is a lower case character");
}

else{
    console.log("It is not lower case character");
}


//question 5 

let st=prompt("enter the string");
console.log(`Original String ${st}`);
console.log(`String without space= ${st.trim()}`);


let a=["akash","verma",1,64,56];
let x=64;

if(a.indexOf(x)!=-1){
    console.log("Element exist in array");
}
else{
    console.log("Element does not exist in array");
}
