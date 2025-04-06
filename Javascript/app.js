console.log("Hello,My name is Akash Verma");
let a=10;
let b=90;
console.log(a+b);

let p=10;
let e=5;
let output=`Total Price is: ${p+e} Rupees.`;
console.log(output)

//Arithmetic Operator
console.log(a+b)
console.log(a-b)
console.log(a++)
console.log(++a)


//conditional statement

let age=23;
if (age>=18){
    console.log("You eligible for vote");
}
if (age<18){
    console.log("Not eligible for vote");
}

//question

let color="red";
if(color=="red"){
    console.log("Stop...");
}
if (color=="yellow"){
    console.log("Go slow");
}
if (color=="green"){
    console.log("Go");
}


//else if

let x=24;
if (x<20){
    console.log("Not 20s");
}

else if(x>20){
    console.log("You are in 20s");
}


//question 2

let size='XL';

if (size=='XL'){
    console.log("Price is Rs.250");
}

else if(size=='L'){
    console.log("Price is Rs.200");
}

else if(size=='M'){
    console.log("Price is Rs.100");
}

else{
    console.log("Price is Rs.50");
}

let marks=45;
if (marks>=33){
    console.log("Pass");

    if(marks>=80){
        console.log("Student Got A++");
    }
    else{
        console.log("Student Pass with B grade");
    }
}
else{
    console.log("Better luck next time");
}


//practise question

let s="good string";

if ((s[0]=='a')&& (s.length==3)){
    console.log("Yes it is true");

}
else{
    console.log("False statement");
}


//switch statement 

let colour="red";

switch(colour){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Go Slowly");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Light is broken");
}


//practice question
let day=1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;                
    case 5:
        console.log("Friday");
        break;    
    case 6:
        console.log("Saturday");   
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
        break;        



}


alert("Something is wrong!!");

/*console.log("This is simple log");
console.error("This is error log");
console.warn('this is warning log');*/


let firstName=prompt("Enter First Name");
let lastName=prompt("Enter Last name");

console.log("Welcome",firstName,lastName,"!!");



