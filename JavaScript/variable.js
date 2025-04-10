// 1. Use strict
// added in ES5
// use this for Vanila JS
'user strict';

// 2. Variable, Read/Write
// let (added in ES6)
let globaName = 'jiwoo';

{
  let name = 'mimi';
  console.log(name);
  name = 'meme';
  console.log(name);
  console.log(globaName);
}

console.log(name); // Error: "name" is not defined (It's a block-scoped variable)
console.log(globaName);

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to change ! 
const dasInWeek = 7;
const jiwooBirthDay = 1021;

// Note !
// Immutable data types: Primitive types(원시타입), frozen object (i.e. object.freeze())
let a = 'Hello, Jiwoo';
a[0] = 'M'; // No change

let obj = Object.freeze({ name: 'jiwoo'});
obj.name = 'mimi'; // Ignore
console.log(obj.name);

obj = { name : 'mimi'}; // Allows variable reassignment. 객체 내부 속성의 변경을 막을 뿐, 변수 자체를 보호하지 않음.
console.log(obj.name);

// const는 변수 재할당 금지
// obj.name 속성 변경은 가능. Object.freeze로 속성 변경 막는 것 가능
const obj2 = Object.freeze({ name : 'hoho'});
obj2.name = 'hihi'; // Error!
obj2 = { name : 'riri'}; // Error!


// Object.freeze()도 뚫리는 경우 (중첩 객체)
const person = Object.freeze({
  name: 'jiwoo',
  details: { gender: 'F'}
});

person.details.gender = 'M';
console.log(person.details.gender);


// summary
// const = 변수 재할당 금지, 객체 속성 변경 ok
// 속성 변경까지 금지 -> Object.freeze()
// 완전한 불변 -> deepFreeze()


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberric values: infinity, -infinity, NaN
const infinity = 1 / 0; // Infinity: dividing a number by zero results in Infinity
const negativeInfinity = -1 / 0; // -Infinity: a negative number divided by zero results in -Infinity
const NaN = 'not a number' / 2; // NaN: an invalid methematical operation results in NaN (Not-a-Number)

// bigInt 
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const jiwoo = 'jiwoo';
const greeting = 'hello' + jiwoo;

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`)

// null
let nothing = null;

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // !=
const gSymbol1 = Symbol.for('id'); // Global Symbol Registry 
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object, real-life object, data structure
const mimi = { name: 'mimi', nickname: 'zoo'};

// 5. Dynamic typing: dynmically typed language
let text = 'hello';
text.charAt(0); // 'h'

text = 1 // typeof -> number
text = '7' + 5 // typeof -> string
text = '2' / '1' // typeof -> number