function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
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