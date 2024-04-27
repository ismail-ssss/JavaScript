const hello = () => {
  console.log("hello Ismail");
};

const ahello = (name) => {
  console.log("ahello " + name);
};

// module.exports = hello;
module.exports = { hello, ahello };
