"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_schema_1 = require("../schemas/todo.schema");
const todo_service_1 = require("../services/todo.service");
const zod_1 = require("zod");
const service = new todo_service_1.TodoService();
class TodoController {
    async getTodos(req, res, next) {
        try {
            const todos = await service.getTodos();
            res.json(todos);
        }
        catch (err) {
            next(err);
        }
    }
    async createTodo(req, res, next) {
        try {
            const parsed = todo_schema_1.createTodoSchema.parse(req.body);
            const todo = await service.createTodo(parsed.text);
            res.status(201).json(todo);
        }
        catch (err) {
            next(err);
        }
    }
    async updateTodo(req, res, next) {
        try {
            const id = (0, zod_1.string)().parse(req.params.id);
            const parsed = todo_schema_1.updateTodoSchema.parse(req.body);
            const todo = await service.updateTodo(id, parsed.completed);
            res.json(todo);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.TodoController = TodoController;
