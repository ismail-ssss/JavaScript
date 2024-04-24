//+++++++++++++ loop +++++++++++++++
//Loops offer a quick and easy way to do something repeatedly

// for statement
// do...while .. The do...while statement repeats until a specified condition evaluates to false.
// while statement.. A while statement executes its statements as long as a specified condition evaluates to true.
// labeled statement
// break statement
// continue statement
// for...in statement
// for...of statement

// ........... for .........
//A for loop repeats until a specified condition
// evaluates to false. The JavaScript for loop is
// similar to the Java and C for loop.

// for(let i = 1; i<10; i++){
//     console.log(`out ${i}`);
//     for (let i = 0; i < 10; i++) {
//         console.log(`in ${i}`);
//     }
//     console.log(`after inner loop ${i}`);
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// ............... for of ..............
//The for...of statement creates a loop Iterating over
// iterable objects (including Array, Map, Set, arguments
// object and so on), invoking a custom iteration hook with
// statements to be executed for the value of each distinct property.

//     let myArray = ["flash", "batman", "superman"];
// for (const i of myArray) {
//     console.log(i);
// }

// const greetings = "hello ji";
// for (const i of greetings) {
//     console.log(i);
// }

// ............ map and forof.............

// const map = new Map();
// map.set("IN","India");
// map.set('SA',"United States of America");
// map.set('FR',"France");

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key,value);
// }

// ..................... forin and object ............
//The for...in statement iterates a specified variable
// over all the enumerable properties of an object.
// For each distinct property, JavaScript executes
// the specified statements.

// const myObject = {
//     js: 'javaScript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(key," ",myObject[key]);
// }

// const prog = ["js","rb","py","java","cpp"];

// for (const key in prog) {
//     console.log(key,prog[key])
// }

// ............   for each ...............

// const prog = ["js", "rb", "py", "java", "cpp"];

// prog.forEach((val) => {
//   //   console.log(val);
// });

// function print(item, index, arr) {
//   console.log(item, index, arr);
// }

// prog.forEach(print);

const myCoding = [
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
