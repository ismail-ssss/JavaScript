//..... map,  reduce, find............................................

// ++++++++++ map +++++++++++=
// It creates a new array by calling a function on every
// element of the original array and storing the results in
// a new array. map() returns the new array, and the original
// array is unchanged ................................

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNumbers);
// const newNum = myNumbers.map((num) => num + 10);
// console.log(newNum);
// console.log(myNumbers);

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .map((num) => num >= 40);
// console.log(newNums);
