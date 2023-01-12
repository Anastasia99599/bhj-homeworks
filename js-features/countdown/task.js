'use strict'

let timer = document.getElementById('timer');
let currentTime = timer.textContent;

setInterval(() => {
    
    if (timer.textContent === '00:00:00') {
        alert('Вы победили в конкурсе!');
        return;
    };

    let seconds = currentTime % 60;
    let minutes = Math.floor(currentTime / 60);
    let hours = Math.floor(currentTime / 3600);

    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    currentTime = +currentTime - 1;

}, 1000);
