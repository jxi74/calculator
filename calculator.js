function add(num1, num2) {
    return num1 + num2;
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
}

const screen = document.querySelector("#screen");

const btns = document.querySelectorAll(".but");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === "add" || btn.id === "subtract" 
        || btn.id === "multiply" || btn.id === "divide") 
        {
            screen.textContent += " " + btn.textContent + " ";
        }
        else if (btn.id === "clear") {
            screen.textContent = "";
        }
        else if (btn.id === "equals") {
            operate(num1, operator, num2);
        }
        else {
            screen.textContent += btn.textContent;
        }
    });
});

// console.log(add(20, 20));
// console.log(subtract(-20, -20));
// console.log(multiply(2, -2));
// console.log(divide(20, 20));
// console.log(divide(20, 0));

