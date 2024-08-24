function createCounterUI() {
    const container = document.getElementById('counter-app');

   
    const title = document.createElement('h1');
    title.innerText = 'Counter';
    container.appendChild(title);

    
    const counterDisplay = document.createElement('span');
    counterDisplay.id = 'counter';
    counterDisplay.innerText = '0';
    container.appendChild(counterDisplay);

    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

   
    const decrementButton = document.createElement('button');
    decrementButton.innerText = '-';
    decrementButton.onclick = decrementCounter;
    buttonContainer.appendChild(decrementButton);

    
    const incrementButton = document.createElement('button');
    incrementButton.innerText = '+';
    incrementButton.onclick = incrementCounter;
    buttonContainer.appendChild(incrementButton);

  
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset';
    resetButton.className = 'reset';
    resetButton.onclick = resetCounter;
    buttonContainer.appendChild(resetButton);

  
    container.appendChild(buttonContainer);
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


function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();
}


document.addEventListener('DOMContentLoaded', createCounterUI);