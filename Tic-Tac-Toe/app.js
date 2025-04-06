let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let newBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;


let winPattern=[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,4,8]
];



const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("clicked");
            box.innerHTML="O";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}


const checkWinner=()=>{
    let isDraw=true;
    for(let pattern of winPattern){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;

        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
            if(pos1Value===pos2Value && pos2Value===pos3Value){
                console.log("Winner",pos1Value);
                showWinner(`Winner is ${pos1Value}`);
                return;
            }
        }
    }
    boxes.forEach((box)=>{
        if(box.innerText===""){
            isDraw=false;
        }
    });
    
    if(isDraw){
        showWinner("Match Draw");
    }
}




newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);