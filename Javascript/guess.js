const max=prompt("Enter maximum number");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess The Number!!!!!!");

while(true){
    if(guess=="quite"){
        console.log("You quite the game!!!!");
        break;
    }
    if(guess==random){
        console.log("You are Correct,Congrats!!!----Number is:",random);
        break;

    }
    else if(guess<random){
        guess=prompt("Guess Number is small Please try again");
    }
    else{
        guess=prompt("Guess Number is large Please try again");
    }
}