function add(num1, num2) {
  return ((num1 * 1) + (num2 * 1));
}

function subtract(num1, num2) {
  return (num1 - num2);
}

function multitply(num1, num2) {
  return (num1 * num2);
}

function divide(num1, num2) {
  return (num1 / num2);
}

function modulo(num1, num2) {
  return (num1 % num2);
}




function operate(operator, num1, num2) {


  if (operator === '+') {
    return add(num1, num2);
  
  } else if (operator === '-') {
    return subtract(num1, num2);
  
  } else if (operator === '*') {
    return multitply(num1, num2);
  
  } else if (operator === '/') {
    return divide(num1, num2);
  } else if (operator === '%') {
    return modulo(num1, num2);
  }
}


const text = document.querySelector('#MyInput');

const NUMBER_PARAS = Array.from(document.querySelectorAll('.button__number'))

const NUMBER_BUTTONS = Array.from(document.querySelectorAll('.button__container'));

const EQUAL_SIGN = document.querySelector('div.equals__select');
/* const EQUAL_TEXT = document.querySelector('p.equals__select') */

const CLEAR_SIGN = document.querySelector('div.clear__select');
/* const CLEAR_TEXT = document.querySelector('p.clear__select'); */


NUMBER_BUTTONS.forEach(button => {
  button.addEventListener('click', (e) => addText(e) );
  
});

NUMBER_PARAS.forEach(para => {
  para.addEventListener('click', e => addTextForParas(e));
  
})

const addTextForParas = function(e) {
  text.value += e.target.textContent;
}

const addText = function(e) {
  const para = e.target.querySelector('p');
  text.value += para.textContent;
}


EQUAL_SIGN.addEventListener('click', e => {
  /*Sets text input to the value of evaluate text.value */
    /* console.log(evaluate(text.value)); */
      
    text.value = evaluate(text.value);
      
})

CLEAR_SIGN.addEventListener('click', () => {
    clear();
})


const clear = function() {
  text.value = '';
}




const evaluate = function (text) {
  const stringText = `${text}`;
  const operation = /([\%\+\-\/\*])/g;
  const numbers = /(0*[1-9][0-9]*)/g;

  if (stringText.includes(`/0`)) {
    return 'ERR';
  }

  if (stringText.includes(`%0`)) {
    return 'ERR';
  }

  /* Javascript treats missing var as zero ie
  (23 *) will equal 0 */

  const operatorsSplit = stringText.split(operation);
  let curIndex = 3;
  let curResult = operate(operatorsSplit[1], operatorsSplit[0], operatorsSplit[2]);
  while (curIndex < operatorsSplit.length) {
    curResult = operate(operatorsSplit[curIndex], curResult, operatorsSplit[curIndex + 1]);
    curIndex += 2;
    
  }
  let curResultRounded = `${curResult}`;
  if (curResultRounded.length > 10) {
    return parseFloat(curResult.toFixed(10));
  }

  if (curResult === undefined) {
    return 'ERR';
  }
  return curResult;

  
}

    
 

 
