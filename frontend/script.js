function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function fetchResult(){
    const display = document.getElementById('display');
    const expression = display.textContent;
    fetch('http://localhost:5000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression })
    })
        .then(response => response.json())
        .then(data => {
            display.textContent = data.result;
        })
        .catch(() => {
            display.textContent = 'Erro';
        });
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function backspace() {
    const display = document.getElementById('display');
    if (display.textContent.length === 1 || display.textContent === 'Erro') {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}