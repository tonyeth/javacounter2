// js/script.js

// Funzione per creare l'interfaccia del counter
function createCounterUI() {
    const container = document.getElementById('counter-app');

    const title = document.createElement('h1');
    title.innerText = 'Counter';
    container.appendChild(title);

    const counterDisplay = document.createElement('span');
    counterDisplay.id = 'counter';
    counterDisplay.innerText = '0'; // Valore iniziale
    container.appendChild(counterDisplay);

    const decrementButton = document.createElement('button');
    decrementButton.innerText = '-';
    decrementButton.onclick = decrementCounter;
    container.appendChild(decrementButton);

    const incrementButton = document.createElement('button');
    incrementButton.innerText = '+';
    incrementButton.onclick = incrementCounter;
    container.appendChild(incrementButton);
}

// Variabile per mantenere lo stato del counter
let counterValue = 0;

// Funzione per aggiornare la visualizzazione del counter
function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.innerText = counterValue;
}

// Funzione per incrementare il valore del counter
function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
}

// Funzione per decrementare il valore del counter
function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
}

// Inizializzazione dell'interfaccia
document.addEventListener('DOMContentLoaded', createCounterUI);
