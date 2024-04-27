// +++++++++++ call bind apply ++++++++++
//In JavaScript, bind, call, and apply are all methods that allow you to manipulate how a function is invoked, particularly with regard to its this context and argument passing.

// ............ call ............
// This method calls a function with a given 'this' value and arguments provided individually. It immediately invokes the function with the specified context and arguments.Example:

const person1 = {
  name: "Alice",
  age: 25,
  qualification: "bca",
  // greet: function () {
  //   console.log(this.name);
  // },
};
// if a function in side the object
// person1.greet(person1, "bob1"); // Output: Hello, Bob! I am Alice.

const greet = function (city, country) {
  console.log(this.name + " " + city + " " + country);
};
//........ call ........
// greet.call(person1, "hubli", "india");
//........ apply ........
// greet.apply(person1, ["hubli", "india"]);
//........ bind ........
const copyGreet = greet.bind(person1, "hubli", "india");
copyGreet();

const person2 = {
  name: "ali",
  age: 2,
  qualification: "bba",
};
// function borrowing
// person1.greet.call(person2);
// greet.call(person2, "hubli", "india");
// greet.apply(person2, ["hubli", "india"]);
const copyGreet1 = greet.bind(person2, "hubli", "india");
copyGreet1();

// .............. bind ...........
//This method creates a new function that, when called, has its this keyword set to a specific value, while also allowing you to pass in a predetermined set of arguments. It does not immediately execute the function but rather returns a new function with the specified context.
// function greet1(name) {
//   console.log(`Hello, ${name}! I am ${this.name}.`);
// }
// const person1 = { name: "Alice" };
// const greetPerson = greet1.bind(person1, "Bob");
// greetPerson(); // Output: Hello, Bob! I am Alice.

// .............. apply .............
//This method is similar to call, but it accepts arguments as an array rather than individually. It immediately invokes the function with the specified context and arguments provided in an array.Example:
// function greet2(name) {
//   console.log(`Hello, ${name}! I am ${this.name}.`);
// }
// const person2 = { name: "Alice" };
// greet2.apply(person2, ["Bob"]); // Output: Hello, Bob! I am Alice.
