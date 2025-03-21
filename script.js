window.onload  = function(){
    var seconds = 0;
    var milliseconds = 0;


    var appendmilliseconds = document.getElementById("millisecond").innerHTML
    var appendseconds = document.getElementById("second").innerHTML
    var buttonstop = document.getElementById("button-stop").innerHTML
    var buttonstart = document.getElementById("button-start").innerHTML
    var buttonreset = document.getElementById("button-reset").innerHTML
    var Interval;



buttonstart.onclick=function(){

clearInterval(interval);
interval = setInterval(startTimer, 10);
};


buttonstop.onclick=function(){

    clearInterval(interval);
};
buttonreset.onclick=function(){

    clearInterval(interval);
   milliseconds = 0;
   seconds =0;
   appendmilliseconds.innerHTML ="00"
   appendseconds.innerHTML = "00"
}
function startTimer(){
milliseconds++;
if (milliseconds <=9) {
 {

        } else {
            isRunning = false;
            startStopButton.textContent = 'Start';
            runningTime += difference;
            clearInterval(tInterval);
        }
    }




    
}



}

};