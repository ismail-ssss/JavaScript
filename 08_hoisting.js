// ++++++++++++++++++ Hoisting : the built-in behavior of
// the language through which declarations of functions,
// variables, and classes are moved to the top of their
// scope all before code execution +++++++++++++++++++

// console.log(one); // output undefined
// console.log(two); // output error
// console.log(three); // output error

var one = "one";
let two = "two";
const three = "three";

// console.log(addone(5)); // it's running on the top of their scope

function addone(num) {
  //   console.log("hello");
  return num + 1;
}

addTwo(5); // Cannot access 'addTwo' before initialization
// bcs here we have hold the function in the variable

const addTwo = function (num) {
  return num + 2;
};
