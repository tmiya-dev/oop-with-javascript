import '../scss/style.scss';

'use strict';

function drawInputText(unfinished) {
  const field = document.getElementById('inputText');
  field.innerText = unfinished;
}

function drawConvertedResults(results) {
  const convertedResults = document.getElementById('convertedResults');
  convertedResults.innerHTML = '';
  for (const result of results) {
    const li = document.createElement('li');
    li.className = 'converted-list-item';
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'radio-button';
    const span = document.createElement('span');
    span.innerText = result;
    label.appendChild(radio);
    label.appendChild(span);
    li.appendChild(label);
    convertedResults.appendChild(li);
    label.addEventListener('click', () => {
      console.dir(result)
    });
  }
}

let unfinished = '';

function onClickButton(button) {
  unfinished += button.innerText
  drawInputText(unfinished);
  const encodedText = encodeURI(unfinished);
  console.dir(encodedText);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.google.com/transliterate?langpair=ja-Hira|ja&text=' + encodedText, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      const respond = JSON.parse(xhr.response);
      drawConvertedResults(respond[0][1])
    }
  }
}


window.addEventListener('load', () => {
  const buttons = document.getElementsByClassName('keyboard-button');
  for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', () => {
      onClickButton(buttons[i])
    })
  }
});
