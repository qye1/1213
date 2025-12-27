let display = document.getElementById("display");
let firstValue = null;
let operation = null;
let memory = 0;

function appendValue(value) {
    display.value += value;
}

function setOperation(op) {
    firstValue = parseFloat(display.value);
    operation = op;
    display.value = "";
}

function calculate() {
    let secondValue = parseFloat(display.value);
    let result = 0;

    switch (operation) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = secondValue !== 0 ? firstValue / secondValue : "Ошибка";
            break;
        case '%':
            result = firstValue % secondValue;
            break;
    }

    display.value = result;
}

function clearDisplay() {
    display.value = "";
}

function sin() {
    display.value = Math.sin(parseFloat(display.value));
}

function cos() {
    display.value = Math.cos(parseFloat(display.value));
}

function power() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

function sqrt() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function floorValue() {
    display.value = Math.floor(parseFloat(display.value));
}

function ceilValue() {
    display.value = Math.ceil(parseFloat(display.value));
}

// Работа с памятью
function memoryAdd() {
    memory += parseFloat(display.value);
}

function memoryClear() {
    memory = 0;
}
