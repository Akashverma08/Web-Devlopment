let btns=document.querySelectorAll("button");

for(btn of btns){
    /*btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("You entered");
    };
    console.dir(btn);*/
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}

function sayName(){
    console.log("AKASH VERMA");
};

function sayHello(){
    console.log("hello");
};

//onmouseenter