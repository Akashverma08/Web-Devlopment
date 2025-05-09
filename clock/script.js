const currTime=document.querySelector("h1");
const selectMenu=document.querySelectorAll('select');
const content=document.querySelector(".content");
const setAlarmBtn=document.querySelector('button');

let alarmTime,isAlarmSet=false,
ringtone=new Audio("ringtone.mp3");

for (let i=12;i>0;i--){
    i=i<10 ? "0"+i:i;
    let option=`<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i=59;i>=0;i--){
    i=i<10 ? "0"+i:i;
    let option=`<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i=2;i>0;i--){
    let ampm=i==1? "AM" : "PM";
    let option=`<option value="${i}">${i}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",ampm);
}


setInterval(()=>{
    let date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    ampm="AM";

    if (h>=12){
        h=h-12;
        ampm="PM";
    }
    //if hour value equal to 0 then set it 12

    h=h==0 ? h=12:h;
    //adding 0 before hrs,min,sec if value less than 10
    h=h<10 ? "0"+h:h;
    m=m<10 ? "0"+m:m;
    s=s<10 ? "0"+s:s;
    currTime.innerText=`${h}:${m}:${s} ${ampm}`;
    if(alarmTime === `${h}:${m} ${ampm}` && s === "00"){
        console.log("Alarm Rings");
        ringtone.play(); // To actually play the alarm
    }

},1000);

function setAlarm(){

    if(isAlarmSet){//isAlarmSet is true
        alarmTime="";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText="Set Alarm";
        return isAlarmSet=false;

    }
    let time=`${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    

    if(time.includes("Hour")|| time.includes("Minute")|| time.includes("AM/PM"))
        return alert("Please,Select a Valid Time");

    isAlarmSet=true;

    alarmTime=time;

    content.classList.add("disable");
    setAlarmBtn.innerText="Clear Alarm";

    console.log(time);
}


setAlarmBtn.addEventListener("click",setAlarm);