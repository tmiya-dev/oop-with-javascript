import '../scss/style.scss';

'use strict';

let finished = '';
let unfinished = '';

function drawInputText() {
  const field = document.getElementById('inputText');
  field.innerText = '';
  const finishedSpan = document.createElement('span');
  finishedSpan.className = 'finished';
  finishedSpan.innerText = finished;
  const unfinishedSpan = document.createElement('span');
  unfinishedSpan.className = 'unfinished';
  unfinishedSpan.innerText = unfinished;
  field.appendChild(finishedSpan);
  field.appendChild(unfinishedSpan);
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
    radio.addEventListener('click', () => {
      unfinished = '';
      finished += result;
      drawInputText()
      convertedResults.textContent = null;
    });
  }
}

function onClickButton(button) {
  const listItem = document.getElementsByClassName('converted-list-item');
  listItem.hidden = false;
  unfinished += button.innerText
  drawInputText();
  const encodedText = encodeURI(unfinished);
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
  const keyLayout = [
    'あいうえお'.split(''),
    'かきくけこ'.split(''),
    'さしすせそ'.split(''),
    'たちつてと'.split(''),
    'なにぬねの'.split(''),
    'はひふへほ'.split(''),
    'まみむめも'.split(''),
    'やゆよ小削'.split(''),
    'らりるれろ'.split(''),
    'わをん゛゜'.split('')
  ];
  const keyboard = document.getElementById('keyboard');
  for (const keyOfRows of keyLayout) {
    const dl = document.createElement('dl');
    for (const key of keyOfRows) {
      const dd = document.createElement('dd');
      dd.className = 'keyboard-button';
      dd.innerText = key;
      dl.appendChild(dd);
    }
    keyboard.appendChild(dl);
  }
  const buttons = document.getElementsByClassName('keyboard-button');
  for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', () => {
      onClickButton(buttons[i])
    })
  }
});
