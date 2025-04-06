let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let highScore=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

let btns=["red","yellow","green","purple"];

let buttons=document.querySelector("button");
buttons.addEventListener("click",function(){
    if(started==false){
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random chose
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    /*console.log(randInt);
    console.log(randColor);
    console.log(randBtn);*/
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}



function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!!  Your Score: <b>${level}</b> <br> Press Start to Play Again`;
        if (highScore<level){
            highScore=level;
            h3.innerText=`High Score : ${highScore}`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="lightblue";

        },100);
        reset();
    }

}


function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}