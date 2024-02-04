'use strict';

import { convert, revert, copyText, aluraList, binaryList } from './main.js';
import { inputValidation, isEmptyValidation } from './validation.js';
import AlertBox from './alertBox.js';

const userInput = document.querySelector('#user-input');
const userOutput = document.querySelector('#user-output');
const convertBtn = document.querySelector('#convert-button');
const selectOption = document.querySelector('#select-option');

const greenAlert = new AlertBox(3);

convertBtn.addEventListener('click', () => {
  const option = selectOption.value;
  const originalString = userInput.value;

  if (!inputValidation(userInput)) {
    return;
  } else {
    switch (option) {
      case 'Alura Challenge':
        userOutput.value = convert(originalString, aluraList);
        userInput.value = null;
        break;
      case 'Binário':
        userOutput.value = convert(originalString, binaryList);
        userInput.value = null;
        break;
    }
    greenAlert.createBox(`O texto foi convertido para ${selectOption.value} com sucesso!`);
  }
});

const revertBtn = document.querySelector('#revert-button');

revertBtn.addEventListener('click', () => {
  const option = selectOption.value;
  const modifiedString = userInput.value;

  if(!inputValidation(userInput)) {
    return;
  } else {
    switch (option) {
      case 'Alura Challenge':
        userOutput.value = revert(modifiedString, aluraList);
        userInput.value = null;
        break;
      case 'Binário':
        userOutput.value = revert(modifiedString, binaryList);
        userInput.value = null;
        break;
    }
    greenAlert.createBox(`O ${selectOption.value} foi revertido para texto com sucesso!`);
  }
});

const copyBtn = document.querySelector('#copy-button');

copyBtn.addEventListener('click', () => {
  if (!isEmptyValidation(userOutput)) {
    return;
  } else {
    copyText(userOutput);
    greenAlert.createBox('Copiado com sucesso!');
  }
});