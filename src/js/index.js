'use strict';

function onClickConvertButton() {
  const text = document.getElementById('inputText');
  const convertedResult = document.getElementById('convertedResult');
  const encodedText= encodeURI(text.value);
  console.dir(encodedText);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.google.com/transliterate?langpair=ja-Hira|ja&text=' + encodedText, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      const obj = JSON.parse(xhr.response);
      console.dir(obj);
      const results = obj[0][0]
      console.dir(results);
    }
  }
}

window.addEventListener('load', () => {
  const button = document.getElementById('convertButton');
  button.addEventListener('click', onClickConvertButton);
});
