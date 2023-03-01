function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function remainder (a,b) {
    return a % b;
}

let a = 0;
let b = 0;
let result = 0;
let opp = "";

function operate (opp,a,b) {
    switch(opp) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        case "%":
            result = remainder(a,b);
            break;
    }
}