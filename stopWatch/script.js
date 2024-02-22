var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");
var timer = document.querySelector(".timer h1");

var hours, minutes, seconds, remainder, formattedTime;

var clockInterval, currentTime, elapsedtime = 0;

start.addEventListener("click", () => {

    var startTime = new Date().getTime();

    clockInterval = window.setInterval(() =>{
        currentTime = new Date().getTime();
        elapsedtime = currentTime - startTime;

        hours = Math.floor(elapsedtime / 3600000);
        remainder = elapsedtime - (hours * 3600000);

        minutes = Math.floor(remainder / 60000);
        remainder -= (minutes * 60000);

        seconds = Math.floor(remainder / 1000);
        remainder -= (seconds * 1000);

        formattedTime = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds) + ":" + remainder.toString();

        timer.innerHTML = formattedTime;
    },10);
})

stop.addEventListener("click", () => {
    window.clearInterval(clockInterval);
})

reset.addEventListener("click", () => {
    window.clearInterval(clockInterval);
    elapsedtime = 0;
    timer.innerHTML = elapsedtime;  
})


function addLeadingZero(val){
    if(val < 10){
        return "0" + val.toString();
    }else{
        return val.toString();
    }
}