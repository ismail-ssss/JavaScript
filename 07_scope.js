// +++++++++++++++ scope +++++++++++++++

// Scope :  scope refers to the current context of your code. This context determines where you can access certain variables and functions ...

// globle scope : which in initialize in globle and accessable from anywhere in page

// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a,b,c); // accessable globlly

// local scope which is initialize in block and accessble only in current block

const a = 11;
var ab = 11;
let abc = 11;
if (true) {
  // console.log(a, ab, abc); // we can access it the globle in the block

  var d = 40; // only var can accesable outside the block
  let e = 50;
  const f = 60;
}
// console.log(e); // we can't access the block variable outside the block

//   .... nexted scope ....

function one() {
  const userName = "Ismail";
  function two() {
    const website = "myWebsite";
    console.log(userName);
  }
  // console.log(website); not accessable bcs it's block scope var
  two();
}
one();
