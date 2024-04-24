// ++++++++++++ Array ++++++++++
// storing a collection of multiple items under
// a single variable name, and has members for
// performing common array operations.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array1 = ["ismail", "chetan", "iqra", "minaz"];
const myarr2 = new Array(1, 2, 3, 4);

// console.log(array);
// console.log(array1[2]);
// console.log(myarr2[2]);

//... array methods ...
// array.push(6);
// console.log(array);
// array.pop(6);
// console.log(array);
// array.unshift(6);
// console.log(array);
// array.shift(6);
// console.log(array);
// console.log(array.length);
// console.log(array.includes(5)); // true
// console.log(array.indexOf(5));

// const newarr = array.join();
// console.log(typeof array);
// console.log(typeof newarr);

// ........... slice .........
// The slice() method of Array instances returns
// a shallow copy of a portion of an array into
// a new array object selected from start to end

// (end not included) where start and end represent
// the index of items in that array. The original array
// will not be modified

console.log("A ", array);
const myn1 = array.slice(1, 3);
console.log(myn1);
console.log("B ", array);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ............. splice ..........
// The splice() method of Array
//instances changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place.

const myn2 = array.splice(1, 3);
console.log("c ", array);
console.log(myn2);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
