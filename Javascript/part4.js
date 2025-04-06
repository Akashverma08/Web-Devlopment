for (let i=1;i<=5;i++){
    console.log(i);
}


for (let i=1;i<=15;i++){
    if(i%2==0){

    }
    else{
        console.log(i);
    }
}


for(let i=2;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}


let n=5;

for(let i=1;i<=10;i++){
    console.log(n,`X`,i,`=`,n*i);
}


for (let i=1;i<=3;i++){
    console.log(`Outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);

    }
}


//fav movie game

let fav="Avengers";

let guess=prompt("Enter the movie name:");

while((guess!=fav)){
    if(guess=="quit"){
        console.log("You quit");
        break;
    }
    guess=prompt("Wrong Guess.Please Try Again");
}

if (fav==guess){
    console.log("Congrats ,It's a correct answer");
}


//loop arrays
let fruits=['apple','graphes','Orange','Papaya','Banana'];

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

/*for(let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
}*/


//Nested Array loop

let heroes=[['Ironmen','Thor','captain America'],['Batman','Supermen','Flash']];
for(let i=0;i<heroes.length;i++){
    console.log(`List ${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j])
    }
}


for (char of "AkashVerma"){
    console.log(char);
}


for(list of heroes){
    for(lists of list){
        console.log(lists);
    }
}