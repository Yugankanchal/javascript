let operator;
let operant1;
let operant2;
const Display = document.getElementById('Display');
// console.log(Display);
function Calculations() {
    var value = this.getAttribute('data-value');
    console.log(value);
    if (value == 'C') {
        Display.innerText = '';
    } else if (value == '+') {
        operator = '+';
        operant1 = Display.textContent;
        Display.innerText = '';
    } else if (value == '-') {
        operator = '-';
        operant1 = Display.textContent;
        Display.innerText = '';
    } else if (value == '*') {
        operator = '*';
        operant1 = Display.textContent;
        Display.innerText = '';
    } else if (value == '/') {
        operator = '/';
        operant1 = Display.textContent;
        Display.innerText = '';
    } else if (value == '=') {
        operant2 = Display.textContent;
        Display.innerText = eval(operant1 + " " + operator + " " + operant2);
    } else if (value == '%') {
        operator = '%';
        operant1 = Display.textContent;
        Display.innerText = '';
    } else if (value == '**') {
        operator = '**';
        operant1 = Display.textContent;
        Display.innerText = '';
    }
    else {
        Display.innerText += value;
    }
}
var button = document.getElementsByClassName('Button');



for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', Calculations);
}
