// +++++++++++ conversion ++++++++++++
// the process of converting a value from
// one data type to another

let Name = "ismail";
let num = 24;
let logedIn = 1;

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

console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("ff", 16));
// 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)
