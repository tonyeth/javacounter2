function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

function createCounterUI() {
    const container = document.getElementById('counter-app');

    const title = createElement('h1', '', 'Counter');
    container.appendChild(title);

    const counterDisplay = createElement('span', '', '0');
    counterDisplay.id = 'counter';
    container.appendChild(counterDisplay);

    const buttonContainer = createElement('div', 'button-container');
    container.appendChild(buttonContainer);
    
    const buttons = [
        { text: '-', action: 'decrement', className: 'button' },
        { text: '+', action: 'increment', className: 'button' },
        { text: 'Reset', action: 'reset', className: 'reset' }
    ];

    buttons.forEach(btn => {
        const button = createElement('button', btn.className || '', btn.text);
        button.dataset.action = btn.action;
        buttonContainer.appendChild(button);
    });

    buttonContainer.addEventListener('click', handleButtonClick);
}

let counterValue = 0;

function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.innerText = counterValue;
}

function handleButtonClick(event) {
    const action = event.target.dataset.action;
    if (action === 'increment') incrementCounter();
    else if (action === 'decrement') decrementCounter();
    else if (action === 'reset') resetCounter();
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
