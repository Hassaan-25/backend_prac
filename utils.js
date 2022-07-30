const { num1, num2 } = require("./Module1");

const sayHi = (name) => {
  console.log(`Hello There, ${name}`);
};

function addNum() {
  console.log(`The sum is ${num1 + num2}`);
}

const string1 = "6";
const string2 = "9";
function addStr() {
  console.log(`The String sum is ${string1 + string2}`);
}

addStr();
addNum();
module.exports = sayHi;
