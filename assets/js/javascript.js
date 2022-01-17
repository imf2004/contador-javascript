var currentNumberWrapper = document.getElementById("currentNumber");
var buttonMore = document.getElementById("more");
var buttonLess = document.getElementById("less");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  validateColor()
  if (currentNumber == 10) {
    buttonMore.disabled = true
    buttonMore.classList.add("cinza")
  }
  if (currentNumber > -10) {
    buttonLess.disabled = false
    buttonLess.classList.remove("cinza")
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  validateColor()
  if (currentNumber == -10) {
    buttonLess.disabled = true
    buttonLess.classList.add("cinza")
  }
  if (currentNumber < 10) {
    buttonMore.disabled = false
    buttonMore.classList.remove("cinza")
  }
}

function validateColor () {
  if (currentNumber  < 0) {
    currentNumberWrapper.style.color = "#ff0000"
  } else {
    currentNumberWrapper.style.color = "#000000"
  } 
}