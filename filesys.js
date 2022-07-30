const { readFileSync, writeFileSync } = require("fs");

const data = readFileSync("./Content/MyContent/Myfile.txt", "utf-8");
console.log(data);

const data2 = readFileSync("./Content/MyContent/Myfile-2.txt", "utf-8");
console.log(data2);

writeFileSync("./Content/MyContent/Myfile-2.txt", `Here is my voice ${data}`);
