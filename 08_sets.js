// +++++++ set +++++++
// The Set object lets you store unique
// values of any type, whether primitive
// values or object references.

// let data = new Set([1, "hello", 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// let arr = [1, 1, "hell", 1, 1, 1, 2, 3, 4, 5];
// let x = {
//   name: "ismail",
//   name: "ismail",
//   lastName: "bhattipuri",
//   age: 22,
// };

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

// let data1 = new Set([1, "hello", 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log("before", data1);
// data1 = [...data1];
// console.log("after", data1);
// let arr1 = [1, 1, "hello", 1, 1, 1, 2, 3, 4, 5];
// console.log("before", arr);
// arr = new Set(arr);
// console.log("after", arr);
console.log();
// +++++++ filter +++++++++++
// filter() returns an array containing the
// element that satisfies the condition

// const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let fm = newNums.filter((e) => console.log(e));

// const newNums2 = newNums.filter( (num) => {return num >4} )
// console.log(newNums2);

// const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach(function(item,index){
//     // console.log(item);
//     document.write(index + " : " + item + "<br>");
// })

// const newNums2 = [];

// newNums.forEach( (num) => {
//     if(num > 4){
//         newNums2.push(num);
//     }
// })
// console.log(newNums2);

// const personalDetails = [
//     {Name: 'Ismail', lastName: 'Bhattipuri', age: 20},
//     {Name: 'Ismail2', lastName: 'Bhattipuri', age: 11},
//     {Name: 'chetan', lastName: 'halkatti', age: 25},
//     {Name: 'chetan2', lastName: 'halkatti', age: 4},
//     {Name: 'iqra', lastName: 'khan', age: 2},
//     {Name: 'iqra2', lastName: 'khan', age: 20},
//     {Name: 'minaz', lastName: 'przade', age: 10},
//     {Name: 'minaz2', lastName: 'przade', age: 40},
//     {Name: 'kulsum', lastName: 'khan', age: 5},
//     {Name: 'kulsum2', lastName: 'khan', age: 50},
//     {Name: 'umar', lastName: 'chitragar', age: 30},
//     {Name: 'umar2', lastName: 'chitragar', age: 15}
// ];

// console.log(personalDetails);

// const userDetails = personalDetails.filter( (bk) => bk.lastName === "Bhattipuri");
// const userDetails = personalDetails.filter( (bk) => bk.age === 40);
// const userDetails = personalDetails.filter( (bk) => bk.age > 20);
// const userDetails = personalDetails.filter( (bk) => {return bk.age > 20 && bk.Name === "chetan"});

// console.log(userDetails);
console.log();
// +++++++++++ find +++++++++++++
// find() returns the element itself that
// satisfies the condition.

// The find() method of Array instances returns
// the first element in the provided array that satisfies
// the provided testing function. If no values satisfy
// the testing function, undefined is returned.

// let arr = [4, 8, 10];
// filter the data
//  first position of an array elements
// let findm = arr.find((e) => e > 4);
// console.log(findm);

// filter search the data
// return the data which match condition
// let filterm = arr.filter((e) => e > 4);
// console.log(filterm);
// ++++++++++ map +++++++++++=
// It creates a new array by calling a function on every
// element of the original array and storing the results in
// a new array. map() returns the new array, and the original
// array is unchanged ................................

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNumbers);
// const newNum = myNumbers.map((num) => num + 10);
// console.log(newNum);
// console.log(myNumbers);

// const newNums = myNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .map((num) => num >= 40);
// console.log(newNums);
console.log();
// +++++++++++++++ reduce ++++++++++
// a predefined method u
// sed to reduce an array to a single value by
// passing a callback function on each element of the array.

// It accepts a function executed on all the items of
// the specified array in the left-to-right sequence.

// const numm = [1, 2, 3];
// const myTotal = numm.reduce(function (acc, currval) {
//   console.log("acc: ", acc, " and currval ", currval);
//   return acc + currval;
// }, 0);
// console.log(myTotal);

// const numm = [1, 2, 3];
// const mytot = numm.reduce((acc, curr) => acc + curr, 0);
// console.log(mytot);

// .... real word scenario ...
// const shoppingCard = [
//   {
//     itemName: "py Course",
//     price: 5999,
//   },
//   {
//     itemName: "js Course",
//     price: 2999,
//   },
//   {
//     itemName: "mobile dev Course",
//     price: 999,
//   },
// ];

// const totalPrice = shoppingCard.reduce((acc, item) => acc + item.price, 0);
// console.log(totalPrice);
