// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// poIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecemnt = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operatoers
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value || value2 || check()}`);

// $$ (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
const nullableObject = null;
console.log(nullableObject && nullableObject.somthing);

if (nullableObject) {
  nullableObject.somthing;
} else {
  console.log(nullableObject); // print : null
}


function check() {
  for(let i = 0; i < 10; i++) {
    console.log(`wasting time....`);
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === stric equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const jw1 = { name: 'jiwoo'};
const jw2 = { name: 'jiwoo'};
const jw3 = jw2;

console.log(jw1 == jw2) // F
console.log(jw2 == jw3) // T
console.log(jw2 === jw3) // T

console.log(0 == false); // T
console.log(0 === false); // F
console.log('' == false); // T
console.log(null == undefined); // T
console.log(null === undefined); // F

// 8. conditional operatiors: if
// if, else if , else

const user_name = 'guest';
if (user_name === 'jw') {
  console.log('Welcome, JW');
} else if (user_name === 'YH') {
  console.log('Long time no see...YH');
} else {
  console.log('Guest');
}

// 9. Ternary operator
// condition ? value1 : value2;
console.log(user_name === 'jw' ? 'Yes' : 'No');

// 10. switch statment
// use for multiple if checks
// use for enum-like value check
// user for multiple type checks in TS
const cafe_menu = 'ice_latte';
switch (cafe_menu) {
  case 'ice_latte':
  case 'Americano':
    console.log('Completed order');
    break;
  case 'a_piece_of_cake':
    console.log('Out of stock!');
    break;
  default:
    console.log('Order please..');
    break;
  }

  // 11. Loops
  // while loop, while the condition is truthy.
  // body  code is excuted.
  let i = 3;
  while (i > 0) {
    console.log(`while: ${i}`);
    i--;
  }

  // do while loop, body code is executed first,
  // then check the condition.
  do {
    console.log(`do while: ${i}`);
    i--;
  } while (i > 0);

  // for loop, for(begin; condition; step)
  for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
  }

  // nested loops
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`i: ${i}, j:${j}`);
    }
  }

  // break, contiue

  // iterate form 0 to 10 and print only even numbers
  for (let i = 1; i < 11; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(`${i}`);
  }

  // iterate from 0 to 10 and print numbers utill reaching 8 
  for (let i = 0; i < 11; i++) {
    if (i > 8) {
      break;
    }
    console.log(`${i}`);
  }