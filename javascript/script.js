function add(num1, num2) {
  return (num1 + num2);
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




function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  
  } else if (operator === '-') {
    return subtract(num1, num2);
  
  } else if (operator === '*') {
    return multitply(num1, num2);
  
  } else if (operator === '/') {
    return divide(num1, num2);
  }
}


const text = document.querySelector('#MyInput');

const NUMBER_PARAS = Array.from(document.querySelectorAll('.button__number'))

const NUMBER_BUTTONS = Array.from(document.querySelectorAll('.button__container'));



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


    
 

 



