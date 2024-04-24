// ++++++ conditional statement ++++++++++
// logical statements or commands that handle
//  decisions based on certain conditions.

//......... if ifelse else ............
// The if...else statement executes a statement
// if a specified condition is truthy. If the condition
// is falsy, another statement in the optional else
// clause will be executed.

// let x = 5;
// let y = "6";
// ....... if condition
// if (x == y) {
//   console.log("runnable");
// }

// ............. if else
// if (x == y) {
//   console.log("runnable");
// } else {
//   console.log("not runnable");
// }

// ............ if else-if else
// if (x == y) {
//   console.log("x equal to y");
// }
// if (x !== y) {
//   console.log("datatype is same");
// } else {
//   console.log("no value got");
// }

//    ++++++++++ switch  +++++++++++++

// let month = 15;

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("Navember");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Please Enter a valid number");
// }

let age = 17;
switch (true) {
  case age >= 18 && age <= 40:
    console.log("You are aligible");
    break;
  default:
    console.log("You are not eligible");
}
