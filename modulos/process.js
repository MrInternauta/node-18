const { exec } = require('node:child_process');

exec('ls -la', (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);

})
