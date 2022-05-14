const btnNumber = document.querySelectorAll(".num");
const btnOperator = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const displayBot = document.querySelector("#displayBot");
const displayTop = document.querySelector("#displayTop");


let a=0;
let b=0;


btnNumber.forEach((button) =>
  button.addEventListener("click", () => displayNum(button.textContent))
);

clear.addEventListener("click", () => 
  (displayBot.textContent = ""),
  (displayTop.textContent = "")
);

function displayNum(num) {
  displayBot.textContent += num;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b > 0) {
    return a / b;
  } else {
    return "ERROR";
  }
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}
