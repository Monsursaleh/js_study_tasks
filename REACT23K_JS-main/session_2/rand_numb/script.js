/* Make a program that asks for three numbers from the user. The program prints out the sum of the numbers if any of the numbers are positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, the text “only negatives” is printed. Handle zero as positive in this assignment. */

const numbers = () => {
  const num1 = Number(prompt('Please give first number'));
  const num2 = Number(prompt('Please give second number'));
  const num3 = Number(prompt('Please give third number'));

  let mult = num1 * num2 * num3;
  let sum = num1 + num2 + num3;

  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log('sum is:', sum, ' and multiplication is: ', mult);
  } else if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    if (num1 <= 0 && num2 <= 0 && num3 <= 0) {
      console.log('all numbers are negative');
    } else {
      console.log('sum is:', sum);
    }
  }
};

numbers();
