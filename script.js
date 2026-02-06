 let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let output = document.querySelector(".output");

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let newNumber = true;
let decimal = true;

let plusMinus = document.querySelector(".plusMinus")
let backSpace = document.querySelector(".backSpace")
let allClear = document.querySelector(".allClear")



plusMinus.addEventListener("click", () =>{
    output.textContent = String(-1 * Number(output.textContent))
})

backSpace.addEventListener("click", () =>{
    output.textContent = output.textContent.substring(0, output.textContent.length-1)
})

allClear.addEventListener("click", () => {
    output.textContent = output.textContent = ""
    firstOperand = null
    secondOperand = null
    currentOperator = null;
    decimal = true
})

numberButtons.forEach(btn => {
    btn.addEventListener("click", () => inputNumber(btn));
});

operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => handleOperator(btn));
});

function inputNumber(number) {
    if (newNumber) {
        output.textContent = "";
        newNumber = false;
        decimal = true;
    }

    if (number.textContent === ".") {
        if (decimal) {
            output.textContent += ".";
            decimal = false;
        }
        return;
    }

    output.textContent += number.textContent;
}

function handleOperator(operator) {
    const symbol = operator.textContent;
    const currentValue = Number(output.textContent);

    // Equals → final computation
    if (symbol === "=") {
        if (currentOperator === null || newNumber) return;

        secondOperand = currentValue;
        const result = compute(firstOperand, secondOperand, currentOperator);
        output.textContent = result;

        firstOperand = result;
        currentOperator = null;
        newNumber = true;
        return;
    }

    // Operator pressed (+ - × ÷)
    if (firstOperand === null) {
        firstOperand = currentValue;
    } else if (!newNumber) {
        secondOperand = currentValue;
        const result = compute(firstOperand, secondOperand, currentOperator);
        output.textContent = result;
        firstOperand = result;
    }

    currentOperator = symbol;
    newNumber = true;
}

function compute(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "×": return a * b;
        case "÷": return b === 0 ? "Error" : a / b;
        default: return b;
    }
}
