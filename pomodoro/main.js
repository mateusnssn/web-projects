
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
let pomodoro_tag = document.getElementById("pomodoro_tag");
let short_break_tag = document.getElementById("short_break_tag");
let long_break_tag = document.getElementById("long_break_tag");


function relay(){
    
    if(step == step_data.pomodoro.type && counter == 3){
        step = step_data.long_break.type;

        minute = step_data.long_break.time;
        second = 0;
        counter = 0;

        pomodoro_tag.classList.remove("select");
        long_break_tag.classList.add("select");

        console.log(1)
        return;

    }if(step == step_data.pomodoro.type && counter < 3){
        step = step_data.short_break.type;

        minute = step_data.short_break.time;
        second = 0;
        counter++;

        pomodoro_tag.classList.remove("select");
        short_break_tag.classList.add("select");
        console.log(2)
        return;
    }

    if(step == step_data.short_break.type){
        step = step_data.pomodoro.type;

        minute = step_data.pomodoro.time;
        second = 0;

        short_break_tag.classList.remove("select");
        pomodoro_tag.classList.add("select");

        console.log(3)
        return;

    }if(step == step_data.long_break.type){
        step = step_data.pomodoro.type;

        minute = step_data.pomodoro.time;
        second = 0;

        long_break_tag.classList.remove("select");
        pomodoro_tag.classList.add("select");

        console.log(4)
        return;
    }


}
