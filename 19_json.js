// ++++++++++++++ json ++++++++++
//    JSON (JavaScript Object Notation) is defined as
// a file format used in object-oriented programming
// that uses human-readable language, text,
// and syntax to store and communicate data objects
// between applications.

const course = {
  cName: "js",
  prise: 999,
  cInstructor: "ismail",
};

console.log(course);

const { cInstructor } = course;
console.log(cInstructor);

let jsonstr = JSON.stringify(course); // convert Object into string
console.log(jsonstr);

jsonstr = jsonstr.replace("ismail", "ismail2");
console.log(jsonstr);

newjsonObj = JSON.parse(jsonstr); // convert string into Object
console.log(newjsonObj);

// api is like
// {
//     name : "ismail",
//     course: "js",
//     price: 99,
// }

// can get api in randomuser me
// formatter for format the api
