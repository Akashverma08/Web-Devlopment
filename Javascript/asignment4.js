let arr=[1,2,3,4,5,6,2,3];

let num=2;

for(let i=0;i<arr.length;i++){
    if (num===arr[i]){
        arr.splice(i,1);
    }
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//question 2

let number=287152;
let copy=number;
let count=0;

while(copy>0){
    count++;
    copy=Math.floor(copy/10);
    
}

console.log(count);

//question 3

let n=287152;
let digit=0;
let c=0;
let s=n;
while(s>0){
    digit=digit + s%10;
    c++;
    s=Math.floor(s/10);
}

console.log(`Sum of Digit : ${digit}`);

//question 4

let r=prompt("Enter the number:");
let f=1;

for(let i=2;i<=r;i++){
    f=f*i;
}

console.log(f);


//question 5

let a=[2,4,65,23,4,8,90,100];
let l=0;

for(let i=0;i<a.length;i++){
    if(l<a[i]){
        l=a[i];

    }
}

console.log(`Largest Number in array ${l}`);