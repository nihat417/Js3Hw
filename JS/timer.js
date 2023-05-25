const timer=document.getElementById("timer");
const startbutton=document.getElementById("start");
const stopbutton=document.getElementById("stop");
const resumebutton=document.getElementById("resume");

let startTime=0;
let ellepsedTime=0;
let timerİnterval;

function updateTimer(){
    let currenTime=Date.now();
    ellepsedTime=currenTime-startTime;

    let hours=Math.floor(ellepsedTime/3600000);
    let minute=Math.floor(ellepsedTime / 60000);
    let seconds=Math.floor((ellepsedTime % 60000) / 1000);

    let kod=`<h1> ${hours} : ${minute} :${seconds} </h1>`;
    timer.innerHTML=kod;
}

function startbtn(){
    startTime=Date.now()-ellepsedTime;
    timerİnterval=setInterval(updateTimer,10);
}

function stopbtn(){
    clearInterval(timerİnterval);
}

function resumebtn(){
    clearInterval(timerİnterval);
    ellepsedTime=0;
    let kod='<h1>00:00:00</h1>';
    timer.innerHTML=kod;
}