import http from 'http';
//CREATE HTTP SERVER
function ruter(request, response) {

  console.log('New request');
  console.log(request.url);
  switch (request.url) {
    case '/hola':
      //Response to client
      response.writeHead(200, 'Perfecto', {
        token: 'ABC'
      })
      response.write('Hola mundo')
      break;

    default:
      //Response to client
      response.writeHead(404, 'Default header')
      response.write('Not found')
      break;
  }

  response.end();
}

http.createServer(ruter).listen(3000)