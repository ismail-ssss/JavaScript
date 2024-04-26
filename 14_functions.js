// +++++++++++ functions +++++++++++
//functions are blocks of reusable code designed to perform a specific task. They are a fundamental building block of JavaScript programming and are used to organize code, make it more readable, and facilitate code reuse.

//Modularity: Functions allow you to break down your code into smaller, manageable parts, making it easier to understand and maintain.......
//Reuse: Once you define a function, you can call it multiple times from different parts of your code without rewriting the same logic..........
//Abstraction: Functions can encapsulate complex operations behind a simple interface, allowing you to hide the implementation details and focus on the higher-level logic........
//Parameterization: Functions can accept parameters, allowing you to customize their behavior by passing different values when you call them........
//Return Values: Functions can return values, enabling them to compute results and pass them back to the code that called them.
console.log();
// ++++++++++++ arrow functions ++++++++++++++
//a simpler way to write functions, especially for short ones. They save you from writing the function keyword, curly braces, and even the return statement for one-liner functions. Plus, they handle the this keyword differently, making them handy in certain situations like callbacks.

//Arrow functions have a few key characteristics:

//Lexical this Binding: arrow functions do not have their own this keyword. Instead, they inherit the this value from the enclosing lexical context. This behavior makes arrow functions particularly useful for preserving the value of this when working with object methods or event handlers.

//No arguments Object: Arrow functions do not have their own arguments object. If you need to access the arguments passed to an arrow function, you can use the rest parameters syntax (...args).

//Cannot be Used as Constructors: Arrow functions cannot be used as constructors with the new keyword. Attempting to do so will result in a runtime error.
console.log();
// ............ Higher-order function  ....
// Higher-order function that takes a function as an argument
// function greet(name, formatter) {
// return formatter(name);
// }
// Function to format the name as uppercase
// function uppercaseFormatter(name) {
//     return name.toUpperCase();
// }
// Function to format the name as lowercase
// function lowercaseFormatter(name) {
//     return name.toLowerCase();
// }
// Using the higher-order function with different formatters
// console.log(greet("Alice", uppercaseFormatter)); // Output: "ALICE"
// console.log(greet("Bob", lowercaseFormatter)); // Output: "bob"
console.log();
//++++++++++ curried function +++++++++++
// A curried function in JavaScript is a function that takes multiple arguments one at a time, returning a new function after each argument until all arguments have been supplied. This technique allows you to partially apply arguments to a function, creating a chain of functions, each expecting one argument.

// Curried version of the add function
// function curriedAdd(x) {
//   return function (y) {
//     return x + y;
//   };
// }
//Using the curried function
// const add5 = curriedAdd(5); //Partial application: fix the first argument to 5
// console.log(add5(3)); // Output: 8;
// Alternatively, you can call it in a single line
//console.log(curriedAdd(5)(3)); // Output: 8
