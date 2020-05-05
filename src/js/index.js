import '../scss/style.scss';

'use strict';

function drawInputText(unfinished) {
  const field = document.getElementById('inputText');
  field.innerText = unfinished
}


let unfinished = ''

window.addEventListener('load', () => {
  const buttons = document.getElementsByClassName('keyboard-button');
  for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', () => {
      unfinished += buttons[i].innerText
      drawInputText(unfinished)
    })
  }
});
