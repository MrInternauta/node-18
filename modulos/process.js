import { exec, spawn } from 'node:child_process';

// exec('ls -la', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);

// })

//execute another node file
// exec('node modulos/console.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);

// })

//strong
let proceso = spawn('ls', ['-la'])
console.log(proceso.pid);
// console.log(proceso.connected);
//listeting changes
proceso.stdout.on('data', function (data) {
  console.log(proceso.killed);
  console.log(data.toString());
  proceso.kill() //kill process
  console.log(proceso.killed);


})

//OnExit
proceso.on('exit', function () {
  console.log('Finished');
})