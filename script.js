'use strict'
document.querySelector('#lampadina');
const lampadina = document.querySelector('#lampadina');

document.querySelector('.interruttore');
const interruttore = document.querySelector('.interruttore');

interruttore.addEventListener('click', function() {
   //console.log('cliccato');
    lampadina.classList.toggle('active');

    if (lampadina.classList.contains('active')) {
        lampadina.src = './img/yellow_lamp.png';
        interruttore.textContent = 'Spegni';
    } else {
        lampadina.src = './img/white_lamp.png';
        interruttore.textContent = 'Accendi';
    }
});