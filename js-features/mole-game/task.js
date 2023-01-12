'use strict'

let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++){
    
    let hole = getHole(i);

    hole.onclick = () => {

        if (hole.classList.contains( 'hole_has-mole' )) {
            deadMole.textContent = +deadMole.textContent + 1;
        } else {
            lostMole.textContent = +lostMole.textContent + 1;
        };

        if (deadMole.textContent == 10) {
            alert('Победа!');
            deadMole.textContent = 0;
            lostMole.textContent = 0;
        };

        if (lostMole.textContent == 5) {
            alert('Вы проиграли!');
            deadMole.textContent = 0;
            lostMole.textContent = 0;
        };
        
    }
 }
 