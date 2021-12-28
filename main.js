const btn = document.querySelector('#startBtn');
let startTime = 0;
let stopTime;

function start(){

   minutes= Math.floor(startTime * 10 / 1000 / 60);
   seconds= Math.floor((startTime * 10 / 1000)%60);
   milliseconds= Math.floor((startTime*10) % 1000)

   m = (minutes < 10) ? '0' + minutes : minutes;
   s = (seconds < 10) ? '0' + seconds : seconds;
   ms =(milliseconds< 10) ? '0' + milliseconds : milliseconds;

   document.querySelector('.clock').innerHTML=m+":"+s+":"+ms;

   startTime++;
}

function startPause(){
    if(startBtn.textContent == "Iniciar"){
        start();
        stopTime = setInterval(start, 10);
        startBtn.textContent = "Pausar";
    }
    else{
        clearInterval(stopTime);
        startBtn.textContent = "Iniciar";
    }
}
document.addEventListener('keydown', function(e) {
    if(startBtn.textContent == "Iniciar"){
        if(e.key === " "){
        start();
        stopTime = setInterval(start, 10);
        startBtn.textContent = "Pausar";
    }
}
    else if(startBtn.textContent == "Pausar"){
        if(e.key === " "){
        clearInterval(stopTime);
        startBtn.textContent = "Iniciar";
        }
    }
});
document.addEventListener('keydown', function(ev) {
    if(ev.key == "Escape"){
        reset();
    }
});
function reset(){
    clearInterval(stopTime);
    startTime = 0;
    document.querySelector('.clock').innerHTML = "00:00:000";
    if(startBtn.textContent == "Pausar"){ startBtn.textContent = "Iniciar"}
  }