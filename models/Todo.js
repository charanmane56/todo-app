//MondoDb Schema and model
const mongoose = require('mongoose');
const todoSchema = mongoose.Schema(
    {title:{type: String, required:true},
     desc: String 
},
    {timestamps: true}
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;