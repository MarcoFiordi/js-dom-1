'use strict' // attiva modalità strict (aiuta a evitare errori)

// seleziono l'immagine della lampadina tramite id
const lampadina = document.querySelector('#lampadina');

// seleziono il bottone tramite classe
const interruttore = document.querySelector('.interruttore');

// funzione che gestisce accensione e spegnimento della lampadina
function toggleLampadina() {

    // cambio lo stato della lampadina:
    // se NON ha la classe 'active' la aggiunge
    // se la ha la rimuove
    lampadina.classList.toggle('active');

    // controllo se la lampadina è attiva (accesa)
    if (lampadina.classList.contains('active')) {

        // se è attiva → imposto l'immagine accesa
        lampadina.src = './img/yellow_lamp.png';

        // cambio il testo del bottone in "Spegni"
        interruttore.textContent = 'Spegni';

    } else {

        // se NON è attiva → imposto l'immagine spenta
        lampadina.src = './img/white_lamp.png';

        // cambio il testo del bottone in "Accendi"
        interruttore.textContent = 'Accendi';
    }
}

// collego la funzione al click del bottone
// quando clicco il bottone viene eseguita la funzione toggleLampadina
interruttore.addEventListener('click', toggleLampadina);