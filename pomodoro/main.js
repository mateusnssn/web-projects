
var minute = 25;
var second = 0;

const time = 1000; // 1 segundo;
var chronometer;


let clock_tag = document.getElementById(`clock`);
let controllerButton = document.getElementById(`controller`);


function start(){
    chronometer = setInterval(() => { timer() }, time);
    controllerButton.innerHTML = "Pause";
    controllerButton.setAttribute('onclick', 'pause()');

    clock_tag.classList.remove(`pause`);
    clock_tag.classList.add(`time`);
}

function pause(){
    clearInterval(chronometer);
    controllerButton.innerHTML = "Start";
    controllerButton.setAttribute('onclick', 'start()');

    clock_tag.classList.remove(`time`);
    clock_tag.classList.add(`pause`);
}

function timer(){

    second--;

    if(second == -1){
        second = 59;
        minute--;

        
    }

    var format = `${(minute < 10 ? '0' + minute : minute)}:${(second < 10 ? '0' + second : second)}`;
    document.getElementById(`clock`).innerHTML = format;
}

function relay(){

}
