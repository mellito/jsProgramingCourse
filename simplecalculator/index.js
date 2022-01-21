let num1 = document.getElementById('num1-el');
let num2 = document.getElementById('num2-el');
let result = document.getElementById('resul-el');



function add() {
    let sum = 0;
    let num1local = parseInt(num1.value);
    let num2local = parseInt(num2.value);
    sum = num1local + num2local;
    result.textContent = `the result of sum is: ${sum}`;;
}

function subtract() {
    let rest = 0;
    let num1local = parseInt(num1.value);
    let num2local = parseInt(num2.value);
    rest = num1local - num2local;
    result.textContent = `the result of rest is: ${rest}`;
}

function divide() {
    let div = 0;
    let num1local = parseInt(num1.value);
    let num2local = parseInt(num2.value);
    div = num1local / num2local;
    result.textContent = `the result of division is: ${div}`;
}

function multiply() {
    let multiply = 0;
    let num1local = parseInt(num1.value);
    let num2local = parseInt(num2.value);
    multiply = num1local * num2local;
    result.textContent = `the result of multiply is: ${multiply}`;
}