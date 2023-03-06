/* Loop Assignments (Don’t use arrays) */

/* 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…) */

for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

/* 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line. */

let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
  answer += ' ' + i + ' ';
  answer += ' ' + end + ' ';
  end -= 2;
}

console.log(answer);

/* 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)
 */

let distance, time;

while (distance != 0) {
  distance = Number(prompt('Enter distance in kilometers'));

  if (distance == 0) {
    console.log('distance 0 - game over');
    break;
  }

  time = Number(prompt('Enter time in hours'));
  let average = distance / time;
  console.log('average is:', average);
}

/* 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even. */

let even = 0;

for (let counter = 0; counter < 100; counter++) {
  let input = Number(prompt('Enter a number'));

  if (input % 2 == 0) {
    even++;
  }
}
console.log('There was', even, 'even numbers');

/* 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers. */

let input;
let sum = 0;
let count = 0;

while (input != 0) {
  input = Number(prompt('enter a number'));
  if (input == 0) {
    console.log('0 input');
    break;
  }
  sum += input;
  count++;
}
let average = sum / count;
console.log(average);

/* 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers. */

let sum = 0;
let counter = 0;

do {
  let input = Number(prompt('enter a number'));
  sum += input;
  counter++;
} while (counter !== 5);

console.log(`Average was ${sum / counter}`);

/* 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers. */

let input, confirmation;
let sum = 0;
let counter = 0;

while (confirmation != 'n') {
  input = Number(prompt('Enter your number'));
  confirmation = prompt('Do you want to continue giving numbers?(y/n)');
  sum = sum + input;
  counter++;
}

console.log(`Average is ${sum / counter}`);

/* 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave. */

let min = 0;
let input = prompt('How many numbers you want to input?');

for (let n = 0; n < input; n++) {
  let num = Number(prompt('Enter number'));
  if (num >= 0 && min == 0) {
    min = num;
  } else if (num < min) {
    min = num;
  }
}

console.log(min);
