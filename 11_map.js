// filter, map  reduce ............................................

// const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach(function(item,index){
//     // console.log(item);
//     document.write(index + " : " + item + "<br>");
// })
// const newNums = [1,2,3,4,5,6,7,8,9];

// const newNums2 = newNums.filter( (num) => {return num >4} )
// console.log(newNums2);

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

// ................ map

const myNumbers = [1, 2, 3, 5, 6, 7, 8, 9];

const newNum = myNumbers.map((num) => num + 10);
// console.log(newNum);

const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1);
