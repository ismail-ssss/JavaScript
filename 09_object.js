// +++++++++ Object ++++++++++++
// An object is a collection of properties, and
// a property is an association between a name
// (or key) and a value. A property's value can be a function,
// in which case the property is known as a method

// .... object literals ....
// let symble1 = Symbol("abc");
// const JsUser = {
//   name: "ismail",
//   fullName: "Ismail Bhattipuri", // it only accessable like JsUser["email"] not with dot
//   [symble1]: "ISB",
//   age: 18,
//   location: "hubli",
//   email: "ibhattipuri@gmail.com",
//   islogedIn: false,
//   lastLoginDay: ["Monday", "Saturday"],
//   func: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[symble1]);
// Object.freeze(JsUser);
// console.log(JsUser);

// JsUser.greeting = function () {
//   console.log("hello js users ");
// };
// JsUser.greetingTwo = function () {
//   console.log("hello js users ", this.name);
// };
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
