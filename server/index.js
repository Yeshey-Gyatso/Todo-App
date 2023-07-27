const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require("./routes/todo");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/todo", todoRouter)

mongoose.connect('mongodb+srv://yesheygyatso:qwer@cluster0.gtye3uq.mongodb.net/todo-list'),
app.listen(3000, () => console.log('Server running on port 3000'));


