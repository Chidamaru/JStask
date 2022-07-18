let timer=document.getElementById("timer");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let counting;
let status;

function stopwatch(){
    miliseconds++;
    if(miliseconds / 10 == 1){
     seconds++;
     miliseconds=0;
        if(seconds / 60 == 1){
         minutes++;
         seconds = 0;
            if(minutes / 60 == 1){
             hours++;
             minutes= 0;
            }
        }
    }
    
    
    timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}

start.addEventListener("click",function(){
   counting = setInterval(stopwatch,100); 
   start.disabled = true;
});

stop.addEventListener("click",function(){
    clearInterval(counting);
    start.disabled = false;

});

reset.addEventListener("click",function(){
    timer.innerHTML = "0:0:0:0";
    clearInterval(counting);

    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    start.disabled = false;
});
