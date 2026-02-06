numberButtons = document.querySelectorAll(".number")
console.log(numberButtons)
let decimal = true

output = document.querySelector(".output")

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => { inputNumber(numberButton)})
});

function inputNumber(number){
    console.log(number.textContent)
    console.log(output.textContent)
    console.log(output.textContent != "0")
    if(number.textContent === "."){
        if (decimal){
            output.textContent += number.textContent
            decimal = false;
        }
    }else if (output.textContent != "0" && output.textContent != "."){
            output.textContent += number.textContent
    }
}