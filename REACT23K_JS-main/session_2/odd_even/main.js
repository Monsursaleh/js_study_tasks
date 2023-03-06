const oddEven = () => {
  let num = Number(prompt('Enter your number'));
  let text;

  if (num >= 0 && num % 2 == 0) {
    text = `${num} is even`;
  } else if (num >= 0 && num % 2 !== 0) {
    text = `${num} is odd`;
  } else {
    text = `${num} is negative number`;
  }
  alert(`Number ${text}`);
};
