const os = require("os");

const user = os.userInfo();
console.log(user);

const sysTime = os.uptime();
console.log(sysTime);

const osInfo = {
  name: os.type(),
  Release: os.release(),
  totelMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(osInfo);
