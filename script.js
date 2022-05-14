const btnNumber = document.querySelectorAll(".num");
const btnOperator = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const del = document.querySelector("#delete");
const dot = document.querySelector(".dot");
const displayBot = document.querySelector("#displayBot");
const displayTop = document.querySelector("#displayTop");

let a = "";
let b = "";
let operator = "";

btnNumber.forEach((button) =>
  button.addEventListener("click", () => displayNum(button.textContent))
);

btnOperator.forEach((button) =>
  button.addEventListener("click", () => setValues(button.textContent))
);

equals.addEventListener("click", () => result(displayBot.textContent));
dot.addEventListener("click", addDot);
del.addEventListener("click", deleteLast);
clear.addEventListener("click", clearDisplay);

function displayNum(num) {
  displayBot.textContent += num;
}

function setValues(button) {
  if (displayBot.textContent == "") {
    return;
  } else {
    a = displayBot.textContent;
    operator = button;
    displayTop.textContent = displayBot.textContent + button;
    displayBot.textContent = "";
  }
}

function result(value) {
  if (operator == "") {
    return;
  } else {
    b = value;
    displayTop.textContent = displayTop.textContent + value + "=";
    let result = operate(a, b, operator);
    if (result > 999999) {
      result=result.toExponential();
    }
    displayBot.textContent = result;
    a = result;
    operator = ""
  }
}

function addDot() {
  if (displayBot.textContent.includes(".")) {
    return;
  } else if (displayBot.textContent != "") {
    displayBot.textContent += dot.textContent;
  }
}

function deleteLast() {
  let temp;
  temp = displayBot.textContent;
  temp = temp.substring(0, temp.length - 1);
  displayBot.textContent = temp;
}

function clearDisplay() {
  displayTop.textContent = "";
  displayBot.textContent = "";
  a = "";
  b = "";
  operator = "";
}


function add(a, b) {
  a = Number(a);
  b = Number(b);
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
