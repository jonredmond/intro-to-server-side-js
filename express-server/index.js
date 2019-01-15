const express = require('express');
const todosRoute = require('./routes/todos');

const app = express();

app.use('/todos', todosRoute);

app.get('/hello-world', (req, res) => {
  res.send(200, 'hello world');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});