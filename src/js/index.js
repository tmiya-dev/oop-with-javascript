'use strict';

window.onload = () => {
  const text = document.getElementById('text0');
  const button = document.getElementById('button0');
  const report = document.getElementById('report');
  button.onclick = () => {
    console.dir(text);
    const message = text.value ? 'Hello, ' + text.value : 'Hello, world!';
    const p = document.createElement('p');
    p.innerText = message;
    report.appendChild(p);
  };
};
