
var minute = 25;
var second = 0;

const time = 1000; // 1 segundo;
var chronometer;


let clock_tag = document.getElementById(`clock`);
let controllerButton = document.getElementById(`controller`);


function start(){
    chronometer = setInterval(() => {
        timer();
        if(minute == 0){
            relay();
        }
        
    }, time);
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


var step = "pomodoro";
const step_data = {
    pomodoro: {type: "pomodoro", time: 25},
    short_break: {type: "short_break", time: 5},
    long_break: {type: "long_break", time: 15} 
};
let counter = 0;


// tags
let pomodoro_tag = document.getElementsByName("pomodoro_tag");
let short_break_tag = document.getElementsByName("short_break_tag");
let long_break_tag = document.getElementsByName("long_break_tag");


function relay(){


    console.log("oiii");
    if(step == step_data.short_break.type){
        minute = 5;
    }if(step == step_data.long_break.type){
        minute = 15;
    }if(step == step_data.pomodoro.type){
        minute = 25;
    }

 


}
