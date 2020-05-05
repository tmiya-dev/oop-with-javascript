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
      drawInputText(unfinished);
      const encodedText = encodeURI(unfinished);
      console.dir(encodedText);
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://www.google.com/transliterate?langpair=ja-Hira|ja&text=' + encodedText, true);
      xhr.send();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          const respond = JSON.parse(xhr.response);
          console.dir(respond);
        }
      } 
    })
  }
});
