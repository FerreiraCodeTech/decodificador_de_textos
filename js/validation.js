'use strict';

import AlertBox from "./alertBox.js";

const error = new AlertBox(3);

function inputValidation(input) {
  const regexp = /[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;

  if(input.value.match(regexp) || input.value === null ||  input.value === '') {
    error.createBox('O input não pode estar vazio, conter letras maiúsculas ou com acento.');
    return false;
  } else return true;
}

function isEmptyValidation(output) {
  if(output.value === '' || output.value === null) {
    error.createBox(`Impossível copiar uma ${typeof output.value} vazia.`);
    return false;
  } else return true;
}

export { inputValidation, isEmptyValidation }