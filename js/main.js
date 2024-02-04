'use strict';

import AlertBox from "./alertBox.js";

window.addEventListener('load', () => {
  const greetings = new AlertBox(3);
  greetings.createBox('BEM VINDO!');
});

const aluraList = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
];

const binaryList = [
  ['a', '01100001 '],
  ['b', '01100010 '],
  ['c', '01100011 '],
  ['d', '01100100 '],
  ['e', '01100101 '],
  ['f', '01100110 '],
  ['g', '01100111 '],
  ['h', '01101000 '],
  ['i', '01101001 '],
  ['j', '01101010 '],
  ['k', '01101011 '],
  ['l', '01101100 '],
  ['m', '01101101 '],
  ['n', '01101110 '],
  ['o', '01101111 '],
  ['p', '01110000 '],
  ['q', '01110001 '],
  ['r', '01110010 '],
  ['s', '01110011 '],
  ['t', '01110100 '],
  ['u', '01110101 '],
  ['v', '01110110 '],
  ['w', '01110111 '],
  ['x', '01111000 '],
  ['y', '01111001 '],
  ['z', '01111010 ']
];

function convert(originalString, listType) {
  originalString = originalString.toLowerCase();

  for (let i = 0; i < listType.length; i++) {
    if (originalString.includes(listType[i][0])) {
      originalString = originalString.replaceAll(listType[i][0], listType[i][1]);
    }
  }

  return originalString;
}

function revert(modifiedString, listType) {
  for (let i = 0; i < listType.length; i++) {
    if (modifiedString.includes(listType[i][1])) {
      modifiedString = modifiedString.replaceAll(listType[i][1], listType[i][0]);
    }
  }

  return modifiedString;
}

function copyText(stringToCopy) {
  stringToCopy.select();
  document.execCommand('copy');
  stringToCopy.value = '';
}

export { convert, revert, copyText, aluraList, binaryList };