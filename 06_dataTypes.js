// +++++++++ data types ++++++++++++
// the data type that a variable can store.
// JavaScript includes primitive and non-primitive.

// ........ primitive ..........
// String ...
// Namber ...
// Boolean ...
// null ...
// undefined ...
// Symbol ...
// BigInt ...

const name = "ismail";
const score = 100;
const value = 10.3;
const logedIn = false;
const temp = null;
let email;
const id = Symbol("123");
const aid = Symbol("123");
const BigInt = 1279137403743624626260n;

// console.log(id === aid); //false both are not equal

console.table([
  typeof name,
  typeof score,
  typeof value,
  typeof logedIn,
  typeof temp,
  typeof email,
  typeof id,
  typeof BigInt,
]);

// .....Reference or Non-primitive ......
// Array
// Object
// Function

const heros = ["ismail", "chetan", "umar"];
console.log(heros);
let myobj = {
  name: "ismail",
  age: 22,
};
console.log(myobj);

const myfunc = function () {
  console.log("hello i'm ismail");
};
myfunc();
