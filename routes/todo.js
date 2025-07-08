const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo');

router.get('/',todo.homeController);

router.get("/add-todo",todo.addTodoFormController); 

router.get("/update-todo",todo.updateTodoFormController);

router.get("/delete-todo",todo.deleteTodopageController);

router.post('/add-todo',todo.addTodoPageController); 

router.post('/update-todo/:id' ,todo.updateTodoPageController);

router.get("/confirm-delete", todo.deleteTodoController);

module.exports = router;