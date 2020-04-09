'use strict';

function getPostalCode() {
  const postalCode = document.getElementById('postalCode').value;
  console.log(postalCode);
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://zipcloud.ibsnet.co.jp/doc/api', true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      console.log('done');　
    }
  }
}

window.addEventListener('load', () => {
  console.log('loaded');
  const button = document.getElementById('getPostalCodeButton');
  console.dir(button);
  button.addEventListener('click', getPostalCode);
});  






