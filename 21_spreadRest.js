// ............  spread operator ...........
// It's commonly used to concatenate or combine arrays.

// const arr1 = [1, 2, 3, 5];
// const arr2 = [4, 5, 6, 7];

// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// ............. rest parameter ..............
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 4, 2, 3)); // Output: 6
// console.log(sum(1, 2, 3, 5, 4, 5)); // Output: 15

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// // With spread operator
// const resultWithSpread = sum(...numbers);
// console.log(resultWithSpread); // Output: 6

// Without spread operator
// const resultWithoutSpread = sum(numbers[0], numbers[1], numbers[2]);
// console.log(resultWithoutSpread); // Output: 6
