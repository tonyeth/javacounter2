

function createCounterUI() {
    const container = document.getElementById('counter-app');

    const title = document.createElement('h1');
    title.innerText = 'Counter';
    container.appendChild(title);

    const counterDisplay = document.createElement('span');
    counterDisplay.id = 'counter';
    counterDisplay.innerText = '0'; 
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


let counterValue = 0;


function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.innerText = counterValue;
}


function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
}


function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
}


document.addEventListener('DOMContentLoaded', createCounterUI);
