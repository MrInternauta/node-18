import fs from 'fs';
import http from 'node:http';
const server = http.createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./input.txt');
  console.time();
  src.pipe(res);
  console.timeEnd();
});

server.listen(8000);