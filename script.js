'use strict'
document.querySelector('#lampadina');
const lampadina = document.querySelector('#lampadina');

document.querySelector('.interruttore');
const interruttore = document.querySelector('.interruttore');

// aggiungo un evento al bottone quando viene cliccato
interruttore.addEventListener('click', function() {

    //console.log('cliccato');

    // cambio lo stato della lampadina:
    // se non ha la classe active la aggiunge
    // se la ha la rimuove
    lampadina.classList.toggle('active');

    // controlla se la lampadina è accesa
    if (lampadina.classList.contains('active')) {

        // se è attiva cambio immagine con quella accesa
        lampadina.src = './img/yellow_lamp.png';
        // cambio il testo del bottone in "Spegni"
        interruttore.textContent = 'Spegni';
    } else {
        // se non è attiva cambio l'immagine con quella spenta
        lampadina.src = './img/white_lamp.png';
        // cambio il testo del bottone in "Accendi"
        interruttore.textContent = 'Accendi';
    }
});