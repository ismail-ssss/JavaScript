// ++++++++++++ modules +++++++++++
// ........ comman modules ............
// const hello = require("./27.1_comman_modules");
// hello.hello();
// hello.ahello("ma'am");

// ..another way
// const { hello, ahello } = require("./27.1_comman_modules");
// hello();
// ahello("ma'am");

// ......... ES6 modules (Ecmascript 2015(ES6))............
import ismail, { hello, helloAgain } from "./27.2_ES6_module.js";
hello();
helloAgain("ma'am");
ismail();
