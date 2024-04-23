// +++++++ set +++++++
// The Set object lets you store unique
// values of any type, whether primitive
// values or object references.

let data = new Set([1, "hello", 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let arr = [1, 1, "hell", 1, 1, 1, 2, 3, 4, 5];
let x = {
  name: "ismail",
  name: "ismail",
  lastName: "bhattipuri",
  age: 22,
};

// console.log(data);
// console.log(arr);
// console.log(x);

// console.log(data.add("55"));
// console.log(data.add("ismail"));
// console.log(data.delete("ismail"));
// console.log(data.clear());
// console.log(data);
// console.log(
//   data.forEach((item) => {
//     console.log(item);
//   })
// );
// for (x of data) {
//   console.warn(x);
// }

// consversion

let data1 = new Set([1, "hello", 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("before", data1);
data1 = [...data1];
console.log("after", data1);
let arr1 = [1, 1, "hello", 1, 1, 1, 2, 3, 4, 5];
console.log("before", arr);
arr = new Set(arr);
console.log("after", arr);
