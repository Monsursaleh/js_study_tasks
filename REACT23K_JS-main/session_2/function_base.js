function myFunction1(c, a, b) {
  return a + b + c;
}
function myFunction2() {
  return 'Hello world';
}
function myFunction3(a) {
  return a;
}

myFunction1(1, 2, 3);
myFunction2();
myFunction3(1);

const myFunction4 = () => {
  return 'hello world';
};
const myFunction5 = (a) => {
  return a;
};
const myFunction6 = (c, b, a) => {
  return a + b + c;
};

function awesomeFunction(a, b) {
  return a + b;
}

const awesomeFunction = (a, b) => a - b;

awesomeFunction(1, 3);

myFunction4();
myFunction5('Hello world');
myFunction6(10, 11, 12);
