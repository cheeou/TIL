// 1. Function declaration
// function name(param1, param2) { boody ... return; }
// one func === one thing
// naming : doSomething, command, verb
// e.g. createSomething
// function is obj in JS

function printMyname() {
  console.log('cheeou');
}

printMyname();

function mylog(message) {
  console.log(message);
}

mylog('cheeou');
mylog(1212414);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by !!!reference!!
function changeName(obj) {
  obj.name = 'jiwoo';
}

const cheeou = { name: 'cheeou' };
changeName(cheeou); // cheeou.name -> jiwoo

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'shirajin') {
  console.log(`${message} by ${from}`);
}

showMessage('hey');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
}

printAll('mimi', 'dondon', 'hehe');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad case
function upgradeUser(user) {
  if (user.point > 10) {
    // upgrade logic
  }
}

// good case
function upgradeUser(user) {
  if (user.point <= 10) {
    return // early exit
  }
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returnd by another function

const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain(); 
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, prinNo) {
  if (answer === 'like you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous fuction
const printYes = function() {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrang', printYes, printNo);
randomQuiz('like you', printYes, printNo);

// arrow fuction
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

