'use strict'
document.querySelector('#lampadina');
const lampadina = document.querySelector('#lampadina');

document.querySelector('.interruttore');
const interruttore = document.querySelector('.interruttore');

interruttore.addEventListener('click', function() {
   //console.log('cliccato');
    lampadina.src = './img/yellow_lamp.png';
});