// arr = ["abc", "def", "ghj", "poi", "kjlm"];
// console.log(arr.slice(1, 2));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(2, 4));

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);

// .................. short circuit ...........
// an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result.

// let a = 5;
// let b = 10;
// let c = 11;
// if (a == 5 || (b == 19 && c == 1)) {
//   console.log(" true");
// } else {
//   console.log(" false");
// }

// ............ push()
// var arr = ["AngularJS", "Node.js"];
// arr.push("JQuery", "Bootstrap");
// console.log("Update array: " + arr);

// ........... arrow functions
// const obj = {
//   name: "Alice",
//   greet: function () {
//     // Using traditional function
//     setTimeout(function () {
//       console.log("Hello, " + this.name + "!"); // This will not work as expected
//     }, 1000);

//     // Using arrow function
//     setTimeout(() => {
//       console.log("Hello, " + this.name + "!"); // This will work as expected
//     }, 1000);
//   },
// };
// obj.greet();
