// +++++++++++ call bind apply ++++++++++
// bind, call, and apply are all methods that allow you to manipulate how a function is invoked, particularly with regard to it's this context and argument passing.

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
//  This method creates a new function with the same body as the original function but with a fixed this value. (It doesn't immediately invoke the function; instead, it returns a new function that you can call later)

// function greet1(name) {
//   console.log(`Hello, ${name}! I am ${this.name}.`);
// }
// const person3 = { name: "Alice" };

// const greetPerson = greet1.bind(person3, "Bob");
// greetPerson(); // Output: Hello, Bob! I am Alice.

// ............ apply .............
//This method is similar to call, (but it accepts arguments as an array rather than individually). It immediately invokes the function with the specified context and arguments provided in an array.Example:
function greet2(name) {
  console.log(`Hello, ${name}! I am ${this.name}.`);
}
const person4 = { name: "Alice" };
greet2.apply(person4, ["Bob"]); // Output: Hello, Bob! I am Alice.
