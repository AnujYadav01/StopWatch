var seconds = 00;
var tens = 00;
var apendTens = document.getElementById("tens");
var apendSeconds = document.getElementById("seconds");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var interval; // to store timers value

//this function will runn when click on start

function startTime(){
    tens++;

    if(tens<9){
        apendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        apendTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        apendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        apendTens.innerHTML = "0" + 0;
    }
    if(seconds>9){
        apendSeconds.innerHTML = seconds;
    }
}

start.onclick = function(){
    interval = setInterval(startTime);
};


stop.onclick = function(){
    clearInterval(interval);
};

reset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    apendSeconds.innerHTML = seconds;
    apendTens.innerHTML = tens;
};