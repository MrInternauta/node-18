import os from 'node:os';
//os.constants
//os.freemem
//os.totalmem
const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
}



console.log(os.arch(),
  os.platform(), //platforms
  os.cpus().length, //cpus
  gb(os.totalmem())); //total ram

console.log(os.homedir()); //home

console.log(os.tmpdir()); //temp
console.log(os.hostname()); //hostname
console.log(os.networkInterfaces()); //hostname

