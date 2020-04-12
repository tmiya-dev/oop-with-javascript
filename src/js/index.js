'use strict';

function getPostalCode() {
  const postalCode = document.getElementById('postalCode').value;
  console.log(postalCode);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://zip-cloud.appspot.com/api/search?zipcode=' + postalCode, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      console.log('done');　
      console.dir(xhr.response);
      const obj = JSON.parse(xhr.response);
      console.dir(obj);
      const results = obj.results[0];
      const address = results.address1 + results.address2 + results.address3;
      console.log(address);
      document.getElementById('inputAddress').value = address;
    }
  }
}

window.addEventListener('load', () => {
  console.log('loaded');
  const button = document.getElementById('getPostalCodeButton');
  console.dir(button);
  button.addEventListener('click', getPostalCode);
});  






