const calcButton = document.querySelector('#calc');

const calcGasoline = (e) => {
  e.preventDefault();
  const price = Number(document.getElementById('price').value);
  const money = +document.querySelector('#money').value;
  const answer = document.querySelector('#answer');

  let text;

  const amount = Math.floor(money / price);

  if (amount >= 10) {
    text = `You could get about ${amount} liters, good now you can go`;
  } else {
    text = `You could get about ${amount} liters. Sorry you have to stay :()`;
  }

  answer.textContent = text;
  document.querySelector('#answer').textContent = 'something';
};

calcButton.addEventListener('click', calcGasoline);

const tempConventer = (id, value) => {
  const val = parseFloat(value);

  const celInput = document.querySelector('#celsius');
  const fahInput = document.querySelector('#fahrenheit');
  const kelInput = document.querySelector('#kelvin');

  if (id === 'celsius') {
    fahInput.value = (val * 1.8 + 32).toFixed(2);
    kelInput.value = (val + 273.15).toFixed(2);
  }
  if (id === 'fahrenheit') {
    celInput.value = ((val - 32) / 1.8).toFixed(2);
    kelInput.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
  }
  if (id === 'kelvin') {
    celInput.value = (val - 273.15).toFixed(2);
    fahInput.value = ((val - 273.15) * 1.8 + 32).toFixed;
  }
};
