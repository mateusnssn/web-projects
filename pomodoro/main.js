
var hour = 0;
var minute = 0;
var second = 0;

const time = 1000; // 1 segundo;
var chronometer;


let controllerButton = document.getElementById(`controller`);

function start(){
    chronometer = setInterval(() => { timer() }, time);
    controllerButton.innerHTML = "Pause";
    controllerButton.setAttribute('onclick', 'pause()');
}

function pause(){
    clearInterval(chronometer);
    controllerButton.innerHTML = "Start";
    controllerButton.setAttribute('onclick', 'start()');
}

function timer(){

    second++;

    if(second == 60){
        second = 0;
        minute++;

        
    }

    if(minute == 60){
        minute = 0;
        hour++;
    }

    var format = `${(hour < 10 ? '0' + hour : hour)}:${(minute < 10 ? '0' + minute : minute)}:${(second < 10 ? '0' + second : second)}`;
    document.getElementById(`clock`).innerHTML = format;
}
