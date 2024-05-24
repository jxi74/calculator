function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    }
    else {
        return "Divide by zero error";
    }
}

let num1;
let operator;
let num2;
let operator2;
let parts;
let lastInput;

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            screen.textContent = add(num1, num2);
            break;
        case "-":
            screen.textContent = subtract(num1, num2);
            break;
        case "*":
            screen.textContent = multiply(num1, num2);
            break;
        case "/":
            screen.textContent = divide(num1, num2);
            break;
    }
    if (operator2 !== undefined) {
        operator = operator2;
        screen.textContent += " " + operator + " ";
        operator2 = undefined;
    }
    else {
        operator = undefined;
    }
    num2 = undefined;
    num1 = screen.textContent;
}

const screen = document.querySelector("#screen");

const btns = document.querySelectorAll(".but");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === "add" || btn.id === "subtract" 
        || btn.id === "multiply" || btn.id === "divide") 
        {
            if (lastInput !== "+" && lastInput != "-" && lastInput != "*" && lastInput != "/")
                screen.textContent += " " + btn.textContent + " ";
            if (parts[2] !== undefined) {
                operator2 = btn.textContent;
                //console.log(operator2);
                callOperate();
            }
        }
        else if (btn.id === "clear") {
            screen.textContent = "";
            num1 = undefined;
            operator = undefined;
            num2 = undefined;
        }
        else if (btn.id === "equals") {
            callOperate();
        }
        else {
            if (lastInput === "=") {
                screen.textContent = "";
            }
            screen.textContent += btn.textContent;
        }
        lastInput = btn.textContent;
        parts = screen.textContent.split(' ');
        //console.log(lastInput);
        //console.log(parts);
    });
});

function callOperate() {
    num1 = parts[0];
    operator = parts[1];
    num2 = parts[2];
    if (num1 !== undefined && operator !== undefined && num2 !== undefined)
        operate(num1, operator, num2);
}

