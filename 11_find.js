// +++++++++++ find +++++++++++++
// find() returns the element itself that
// satisfies the condition.

// The find() method of Array instances returns
// the first element in the provided array that satisfies
// the provided testing function. If no values satisfy
// the testing function, undefined is returned.

let arr = [4, 8, 10];
// filter the data
//  first position of an array elements
let findm = arr.find((e) => e > 4);
console.log(findm);

// filter search the data
// return the data which match condition
let filterm = arr.filter((e) => e > 4);
console.log(filterm);
