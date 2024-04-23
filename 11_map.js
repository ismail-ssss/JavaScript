// filter, map,  reduce, find............................................

// +++++++ filter +++++++++++
// filter() returns an array containing the
// element that satisfies the condition

// const newNums = [1,2,3,4,5,6,7,8,9];

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

// ++++++++++ map +++++++++++=
// It creates a new array by calling a function on every
// element of the original array and storing the results in
// a new array. map() returns the new array, and the original
// array is unchanged ................................

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNumbers);
// const newNum = myNumbers.map((num) => num + 10);
// console.log(newNum);
// console.log(myNumbers);

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
// console.log(newNums);

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

const numm = [1, 2, 3];
const mytot = numm.reduce((acc, curr) => acc + curr, 0);
// console.log(mytot);

const shoppingCard = [
  {
    itemName: "py Course",
    price: 5999,
  },
  {
    itemName: "js Course",
    price: 2999,
  },
  {
    itemName: "mobile dev Course",
    price: 999,
  },
];

const totalPrice = shoppingCard.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);

// +++++++++++ find +++++++++++++
// find() returns the element itself that
// satisfies the condition.
