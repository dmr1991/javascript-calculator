let acButton = document.getElementById("acBtn");
let multiplyButton = document.getElementById("multiplyBtn");
let clearButton = document.getElementById("clearBtn");
let equalButton = document.getElementById("equalBtn");
let sqrRootButton = document.getElementById("squareRootBtn");
let percentageButton = document.getElementById("percentageBtn");

function clickTest() {
  alert("clicked");
}

//envia el valor del boton a la pantalla
function display(val) {
  document.getElementById("result").value += val;

  return val;
}

//hace el calculo
function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

//borra la pantalla
function clearScreen() {
  document.getElementById("result").value = "";
}

function sqrRoot() {
  let number = document.getElementById("result").value;
  let sqRoot = Math.sqrt(number);
  document.getElementById("result").value = sqRoot;
  return sqRoot;
}

function percentage() {
  let number = document.getElementById("result").value;
  let percentage = number / 100;
  document.getElementById("result").value = percentage;
  return percentage;
}

acButton.addEventListener("click", clearScreen);
clearButton.addEventListener("click", clearScreen);
equalButton.addEventListener("click", solve);
sqrRootButton.addEventListener("click", sqrRoot);
percentageButton.addEventListener("click", percentage);
