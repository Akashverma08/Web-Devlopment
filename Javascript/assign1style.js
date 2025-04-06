let num=100;

if (num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

//question 2

let nam =prompt("Enter your name");
let age =prompt("Enter your age");

alert(`${nam} is ${age} years old`);

let quater=1;

switch(quater){
    case 1:
        console.log("January Feburary March");
        break;
    case 2:
        console.log("April May June");
        break;
    case 3:
        console.log("July August September");
        break;
    case 4:
        console.log("October November December");
        break;
    default:
        console.log("Invalid Option!!!");
        break;
}

//question 4

let x="golden string";

if((x[0]=='A' || x[0]=='a')&&(x.length>5)){
    console.log("It is Golden String");
}

else{
    console.log("It is not a string");
}


//question 5

let a=10;
let b=55;
let c=90;

if((a>b)&&(a>c)){
    console.log("a is greater");
}

else if((b>c)&&(b>a)){
    console.log("b is greater");

}

else{
    console.log("c is greater")
}


//question 6

let num1=32;
let num2=4732;

if(num1%10==num2%10){
    console.log("Both number has same last digit",num1%10);

}
else{
    console.log("Last digit of a number is not same");
}