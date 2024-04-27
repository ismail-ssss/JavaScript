// +++++++++++ type conversion ++++++++++++
// the process of converting a value from
// one data type to another

// let Name = "ismail";
// let num = 24;
// let logedIn = 1;

// console.log(typeof Name);

// let convertInNum = Number(Name);
// console.log(convertInNum);

// let convertInBoolean = Boolean(Name);
// console.log(convertInBoolean);

// console.log(typeof num);
// let convertInString = String(num);
// console.log(typeof convertInString);

// let convertInBoolean = Boolean(num);
// console.log(convertInBoolean);

// console.log(typeof logedIn);
// let convertInString = Boolean(logedIn);
// console.log(convertInString);

// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// // 1 (decimal part is truncated)
// console.log(parseInt("ff", 16));
// // 255 (lower-case hexadecimal)
// console.log(parseInt("0xFF", 16));
// // 255 (upper-case hexadecimal with "0x" prefix)
// console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)
console.log();
// ++++++ type coercion ++++++++
// Type coercion in JavaScript refers to the automatic conversion of values from one data type to another when performing operations or comparisons. JavaScript is a dynamically typed language, which means that variables can hold values of any data type, and type coercion helps facilitate operations between different types.

//a) Implicit Type Coercion: This occurs automatically when JavaScript converts the type of a value to another type without explicit instructions from the developer. For example, when using the + operator with different types:
const num1 = 5;
const str = "10";
console.log(num1 + str); // Output: "510"

//b)Explicit Type Coercion: This occurs when the developer explicitly converts the type of a value using built-in functions or operators. For example, using parseInt() to convert a string to an integer:
const str1 = "10";
const str2 = "10";
const num2 = Number(str1) + parseInt(str2);
console.log(num2); // Output: 20
