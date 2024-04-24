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

// .... real word scenario ...
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
