const names = require("./module1.js");
const sayHi = require("./utils");
const addNum = require("./utils");

require("./utils");

addNum(names.num1, names.num2);

sayHi(names.ali);
sayHi(names.umer);
