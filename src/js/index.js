import '../scss/style.scss';

'use strict';

function onClickKeyboardButton() {
}

window.addEventListener('load', () => {
  const buttons = document.getElementsByClassName('keyboard-button');
  for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', () => {
      alert(buttons[i].innerText);
    }) 
  }
});
