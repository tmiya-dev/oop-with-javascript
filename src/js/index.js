import '../scss/style.scss';

'use strict';

function onClickKeyboardButton() {
  const button = document.getElementById('keyboard').innerHTML;
  const text = document.getElementById('inputText');
}

window.addEventListener('load', () => {
  const keyboardButton = document.getElementById('keyboard');
  for(let i = 0; i < keyboardButton.length; i++) {
    keyboardButton.addEventListener('click', onClickKeyboardButton);
  }
});
