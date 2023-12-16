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
document.getElementById('plus').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', input);
document.getElementById('multiply').addEventListener('click', input);
document.getElementById('slash').addEventListener('click', input);
document.getElementById('percent').addEventListener('click', percent);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('ac').addEventListener('click', reset);
document.getElementById('equals').addEventListener('click', equals);

const display = document.getElementById('display');
let displayCurrent ="";

function input(e) {
    let inputValve =e.target.innerText;
    displayCurrent += inputValve;
    display.innerText = displayCurrent;
}

function del() {
    displayCurrent= displayCurrent.substring(0, displayCurrent.length -1);
    display.innerText = displayCurrent;
}

function reset() {
    displayCurrent= "";
    display.innerText =displayCurrent;
}

function equals() {
     const compute = (displayCurrent='') => {
        let total = 0;
        let word = displayCurrent.match(/[+\-*/]?\d+(\.\d+)?/g) || [];
      
        while (word.length){
          const taken =word.shift();
          const operator = taken[0];
          const value = parseFloat(taken.slice(1));
      
          switch(operator){
            case '+' :
              total += value;
              break;
      
            case '-' :
              total -= value;
              break;
      
            case '*' :
              total *=value;
              break;
      
            case '/' :
              total /= value;
              break;
          }
        }
        return total;
      };
      let answer = compute(displayCurrent);
        display.innerText= answer;
}

function percent(){
    
}