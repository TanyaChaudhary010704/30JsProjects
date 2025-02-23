let display = document.querySelector('.display h1');
const displayNum = (e) => {
  switch (e.target.innerText) {
    case 'AC':
      display.innerText = '';
      break;
    case 'DE':
      display.innerText = display.innerText.toString().slice(0, -1);
      break;
    case '=':
      display.innerText = eval(display.innerText);
      break;
    default:
      display.innerText += e.target.innerText;
  }
}
displayNum();