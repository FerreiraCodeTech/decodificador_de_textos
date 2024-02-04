'use strict';

export default class AlertBox {
  constructor(timer) {
    this.timer = timer;
  }

  createBox(text) {
    const html = document.querySelector('html');
    const div = document.createElement('div');
    const span = document.createElement('span');

    div.setAttribute('id', 'alert-box');
    div.appendChild(span);

    span.textContent = text;

    if (document.querySelector('#alert-box')) {
      html.removeChild(document.querySelector('#alert-box'));
      html.appendChild(div);
    } else {
      html.appendChild(div);
    }

    setTimeout(() => {
      html.removeChild(div);
    }, this.timer * 1000);
  }
}