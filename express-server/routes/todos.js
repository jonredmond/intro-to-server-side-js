const express = require('express');
const bodyParser = require('body-parser');
const todoStore = require('../stores/todos');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send(todoStore);
});

router.get('/:id', (req, res) => {
  const {
    id
  } = req.params;

  const todo = todoStore[id];

  res.send(todo || 404);
});

router.post('/', (req, res) => {
  const todo = req.body;
  todo.id = todoStore.length;

  todoStore.push(todo);

  res.send(201, todo)
});

module.exports = router;