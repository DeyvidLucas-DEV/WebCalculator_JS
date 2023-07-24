function insert(value) {
  var number = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = number + value;
}

function clears() {
  document.getElementById("result").innerHTML = "";
}

function erase() {
  let resultElement = document.querySelector("#result");
  let currentValue = resultElement.textContent;

  let newValue = currentValue.slice(0, -1);

  resultElement.textContent = newValue;
}

function calculate() {
  let resultElement = document.querySelector("#result");
  let currentValue = resultElement.textContent;

  let result = eval(currentValue);

  resultElement.textContent = result;
}

