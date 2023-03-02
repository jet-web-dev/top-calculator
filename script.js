let num1 = null;
let num2 = null;
let result = null;
let operator = "";
let displayValue = "0";
let lastClick = "";
const buttons = document.querySelectorAll("button");
const display = document.getElementById("calc-display");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (buttons[i].classList.contains('btn-num')) {
            numClick(buttons[i].innerText);
        } else if (buttons[i].classList.contains('btn-dec')) {
            decClick(buttons[i].innerText);
        } else if (buttons[i].classList.contains('btn-clr')) {
            clrClick();
        } else if (buttons[i].classList.contains('btn-bck')) {
            bckClick();
        } else if (buttons[i].classList.contains('btn-eql')) {
            eqlClick(displayValue);
        } else if (buttons[i].classList.contains('btn-opr')) {
            oprClick(displayValue, buttons[i].innerText)
        } else {
            alert("Error in button event listener assignment!")
        }
    })
};

function displayUpdate () {
    if (displayValue.length > 10) {
        display.innerText = displayValue.substring(0, 10);
    } else {
        display.innerText = displayValue;
    }
}

function numClick (a) {
    if(displayValue === "0" || displayValue == num1) {
        displayValue = a;
        displayUpdate(displayValue);
        lastClick = "num";
    } else {
        displayValue += a;
        displayUpdate(displayValue);
        lastClick = "num";
    }
}

function decClick (a) {
    if (displayValue.includes(".") === false) {
        displayValue += a;
        displayUpdate(displayValue);
        lastClick = "dec";
    }
}

function clrClick () {
    num1 = null;
    num2 = null;
    result = null;
    operator = "";
    displayValue = "0";
    lastClick = "";
    displayUpdate(displayValue);    
}

function bckClick() {
    if (+displayValue > 0) {
        displayValue = displayValue.slice(0, -1);
        displayUpdate(displayValue);
    }
}

function eqlClick (a) {
    if (operator === "/" && +a === 0) {
        alert("You can't divide by 0, you CAD!");
    } else if ( num1 !== null && operator !== "") {
    num2 = +a;
    result = operate(num1, num2, operator);
    num1 = result;
    displayValue = result;
    displayUpdate(displayValue);
    }    
}

function oprClick (a, b) {
    if (operator !== "") {
        eqlClick(displayValue);
        operator = b;
    } else {
        num1 = +a;
        operator = b;
        lastClick = "num"
    }

}

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return Math.round(a * b * 100) / 100;
}

function divide (a,b) {
    return Math.round(a / b * 100) / 100;
}

function operate (a,b,opp) {
    switch(opp) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}