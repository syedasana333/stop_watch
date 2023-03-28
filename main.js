const start = document.getElementById('startbtn')
const reset = document.getElementById('resetbtn')

let sec = 0;
let min = 0;
let hr = 0;

let ldsec = 0;
let ldmin = 0;
let ldhr = 0;

let timerStatus = 'stopped'
let timerInterval = 'null'

function stopWatch(){
    sec++;
    if(sec/60===1){
        sec=0;
        min++;

        if(min/60===1){
            min=0;
            hr++
        }
    }
    if(sec<10)
    ldsec='0'+ sec.toString();
    else
    ldsec = sec

    if(min<10)
    ldmin='0'+min.toString();
    else
    ldmin = min

    if(hr<10)
    ldhr='0'+hr.toString();
    else 
    ldhr = hr


    document.getElementById('timer').innerText = ldhr+':'+ldmin+':'+ldsec;
}

// window.setInterval(stopWatch,1000)

start.addEventListener('click',function(){
    if(timerStatus ==='stopped'){
        timerInterval = window.setInterval(stopWatch,1000)
        document.getElementById('startbtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus='started';
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startbtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus='stopped';
    }
})

reset.addEventListener('click',function(){
    window.clearInterval(timerInterval)
    sec=0;
    min=0;
    hr=0;
    document.getElementById('timer').innerText='00:00:00';
})