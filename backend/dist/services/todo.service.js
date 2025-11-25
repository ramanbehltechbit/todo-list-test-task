"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_repository_1 = require("../repositories/todo.repository");
const repo = new todo_repository_1.TodoRepository();
class TodoService {
    getTodos() {
        return repo.findAll();
    }
    createTodo(text) {
        return repo.create(text);
    }
    updateTodo(id, completed) {
        return repo.update(id, completed);
    }
}
exports.TodoService = TodoService;
