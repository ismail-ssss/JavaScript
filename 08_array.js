// ++++++++++++ Array ++++++++++

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array1 = ["ismail", "chetan", "iqra", "minaz"];
const myarr2 = new Array(1, 2, 3, 4);

// console.log(array);
// console.log(array1[2]);
// console.log(myarr2[2]);

//... array methods..
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

console.log("A ", array);
const myn1 = array.slice(1, 3); // copy
console.log(myn1);
console.log("B ", array);

const myn2 = array.splice(1, 3); // it move the value
console.log("c ", array);
console.log(myn2);
