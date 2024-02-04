'use strict';

const author = document.querySelector('#author-container');
const name = 'Filipe Ferreira';
const year = new Date().getFullYear();

author.firstChild.nextSibling.textContent = `desenvolvido por ${name} ${year}`;