const rangeForm = document.querySelector(".js-rangeNumber"),
    rangeInput = rangeForm.querySelector("input"),
    h4 = document.querySelector("h4"),
    selectForm = document.querySelector(".js-selectForm"),
    selectInput = selectForm.querySelector("input"),
    startBtn = selectForm.querySelector("button"),
    gameText = document.querySelector(".js-gameText"),
    resultText = document.querySelector(".js-gameResult");

let MAXNUMBER = rangeInput.value;
let choseNumber;

function writeResult(randomNumber) {
    if (isNaN(parseInt(choseNumber))) {
        alert("You must select a number!!")
        gameText.innerText = "";
    } else if (parseInt(choseNumber) === randomNumber) {
        resultText.innerText = "You won!"
    } else {
        resultText.innerText = "You lost!"
    };
}

function getInputValue(event) {
    const inputValue = event.target.value;
    choseNumber =  inputValue;
}

function writeText(randomNumber) {
    gameText.innerText = `You chose: ${choseNumber}, the machine chose: ${randomNumber}.`;
}

function genrandom() {
    const number = Math.floor(Math.random() * parseInt(MAXNUMBER));
    return number;
}

function handleClick(event) {
    event.preventDefault();
    const randomNumber = genrandom();
    writeText(randomNumber);
    writeResult(randomNumber);
}

function handleRangeValue(event) {
    const rangeValue = event.target.value;
    MAXNUMBER = rangeValue;
    h4.innerText = `Generate a number between 0 and ${rangeValue}`;
}

function init() {
    rangeInput.addEventListener("input", handleRangeValue);
    startBtn.addEventListener("click", handleClick);
    selectInput.addEventListener("change", getInputValue);
}

init();