'use strict'

let cookieImg = document.getElementById('cookie');
let clickNumber = document.getElementById('clicker__counter');
let clickSpeed = document.getElementById('clicker__speed-counter');

let start = new Date();

cookieImg.onclick = () => {

    let clickTime = new Date();
    let difTime = (clickTime - start) / 1000;
    
    clickSpeed.textContent = (1 / difTime).toFixed(2);
    start = clickTime;

    if (+clickNumber.textContent % 2 == 1) {
        cookieImg.width -= 20;
        clickNumber.textContent = +clickNumber.textContent + 1;
    } else {
        cookieImg.width += 20;
        clickNumber.textContent = +clickNumber.textContent + 1;
    }
}