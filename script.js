document.getElementById('one').addEventListener('click', input);
document.getElementById('two').addEventListener('click', input);
document.getElementById('three').addEventListener('click', input);
document.getElementById('four').addEventListener('click', input);
document.getElementById('five').addEventListener('click', input);
document.getElementById('six').addEventListener('click', input);
document.getElementById('seven').addEventListener('click', input);
document.getElementById('eight').addEventListener('click', input);
document.getElementById('nine').addEventListener('click', input);
document.getElementById('o').addEventListener('click', input);
document.getElementById('point').addEventListener('click', input);
document.getElementById('plus').addEventListener('click', input);
document.getElementById('subtract').addEventListener('click', input);
document.getElementById('multiply').addEventListener('click', input);
document.getElementById('slash').addEventListener('click', input);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('ac').addEventListener('click', reset);
document.getElementById('equals').addEventListener('click', equals);

const display = document.getElementById('display');
let displayCurrent ="";
const previousDisplay = document.getElementById('miniDisplay');
let displayPrevious = "";

function input(e) {
        let inputValve =e.target.innerHTML;
        displayCurrent += inputValve;
        display.innerHTML = displayCurrent;
        displayPrevious = displayCurrent;
    }

function del() {
    displayCurrent= displayCurrent.substring(0, displayCurrent.length -1);
    display.innerHTML = displayCurrent;
}

function reset() {
    displayCurrent= "";
    displayPrevious= "";
    display.innerHTML =displayCurrent;
    previousDisplay.innerHTML=displayPrevious;
}

function calculate(){
  var inputString = display.innerHTML;
  var numbers = inputString.split(/\+|\-|\*|\//g);
  var operators = inputString.replace(/[0-9]|\./g,"").split(" ");

  console.log(inputString);
  console.log(numbers);
  console.log(operators);

  var divide = operators.indexOf("/");
  while(divide !=-1){
    numbers.splice(divide,2,numbers[divide]/numbers[divide + 1]);
    operators.splice(divide,1);
    divide= operators.indexOf("/");
  }

  var multiply = operators.indexOf("*");
  while(multiply !=-1){
    numbers.splice(multiply,2,numbers[multiply]*numbers[multiply + 1]);
    operators.splice(multiply,1);
    multiply= operators.indexOf("*");
  }

  var subtract = operators.indexOf("-");
  while(subtract !=-1){
    numbers.splice(subtract,2,numbers[subtract]-numbers[subtract + 1]);
    operators.splice(subtract,1);
    subtract= operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while(add !=-1){
    numbers.splice(add,2,parseFloat(numbers[add])+ parseFloat(numbers[add + 1]));
    operators.splice(add,1);
    add= operators.indexOf("+");
  }
  return numbers[0];
}

function equals(){
    let string = displayCurrent.innerHTML;
    let answer = calculate(string);
    let view = "=";
    previousDisplay.innerHTML=displayPrevious + view + answer;
    displayCurrent="";
    display.innerHTML=displayCurrent;
}