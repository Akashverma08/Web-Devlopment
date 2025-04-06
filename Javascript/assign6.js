//Question 1
let arr=[2,5,3,9,100,9,78,23,5,7,8];
let num=5;

function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);


//Question 2

let str="abcdabcdefgggh";

function getUnique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        currChar=str[i];
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    return ans;
}

getUnique(str);

//Question 3

let country=["India","Pakistan","kenya","United states of america"];

function longest(country){
    let ansIn=0;
    for(let i=0;i<country.length;i++){
        let ansLen=country[ansIn].length;
        let curLen=country[i].length;
        if(curLen>ansLen){
            ansIn=i;
        }
    }
    return country[ansIn];
}

longest(country);
//Question 4

let sen="akashverma";

function countVowels(sen){
    let count=0;
    for(let i=0;i<sen.length;i++){
        if( sen[i]=="a"||
            sen[i]=="e"||
            sen[i]=="i"||
            sen[i]=="o"||
            sen[i]=="u"
        )
        count++;


    }
    return count;

}


//Question 5

let start=100;
let end=200;

function generateNum(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+end;
}
