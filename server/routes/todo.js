const express = require('express');
const { Todo } = require('../database');
const router = express.Router();


router.get('/', async (req, res) => {
    const todos = await Todo.find({});
    res.json({ todos });
  });

router.post('/add', (req,res)=>{
    const { title, description } = req.body;
    const obj={ title,description };
    const newTodo = new Todo(obj);
    newTodo.save();
    res.send('Todo created successfully!');
})

router.put('/todos/:todoId', async(req,res)=>{
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true });
    res.json({ todo });
})

router.delete('/todos/:todoId', async (req, res) => {
    await Todo.findByIdAndRemove(req.params.todoId);
    res.send('Todo deleted successfully!');
  });


module.exports = router