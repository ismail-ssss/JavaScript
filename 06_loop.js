// ........... for .........

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
