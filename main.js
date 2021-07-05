var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var click = new Audio("click.mp3"); 
var bell = new Audio("bell.mp3"); // som no final

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');



//armazendo a uma variavel de cronometro
var startTimer;


start.addEventListener('click', function(){
    
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;

})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Iniciando funçoes de cronometro
function timer(){
    // Contagem regressiva para tempo de trabalho
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    // Interrompe contagem
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    // Se o as rodadas forem concluidas seram adicionados a um contador
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bell.play();


        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
        
        bell.play();
    }
}

// Para o temporizador
function stopInterval(){
    clearInterval(startTimer);
}