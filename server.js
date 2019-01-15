const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received ----- ');

  console.log('Request url -----', req.url);
  console.log('Request method ----', req.method);


  if (req.url === '/hello-world' && req.method === 'GET') {
      res.write('hello world');
  } else {
    res.writeHead(404);
    res.write(`No mapping found for ${req.method} ${req.url}`)
  }
  res.end();
});

server.listen(8080, () => {
  console.log('server listening on port 8080');
});