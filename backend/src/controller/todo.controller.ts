import { Request, Response, NextFunction } from "express";
import { createTodoSchema, updateTodoSchema } from "../schemas/todo.schema";
import { TodoService } from "../services/todo.service";
import { string } from 'zod';

const service = new TodoService();

export class TodoController {
    async getTodos(req: Request, res: Response, next: NextFunction) {
        try {
            const todos = await service.getTodos();
            res.json(todos);
        } catch (err) {
            next(err);
        }
    }

    async createTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const parsed = createTodoSchema.parse(req.body);
            const todo = await service.createTodo(parsed.text);
            res.status(201).json(todo);
        } catch (err) {
            next(err);
        }
    }

    async updateTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const id = string().parse(req.params.id);
            const parsed = updateTodoSchema.parse(req.body);
            const todo = await service.updateTodo(id, parsed.completed);
            res.json(todo);
        } catch (err) {
            next(err);
        }
    }
    async deleteTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const id = string().parse(req.params.id);
            const todo = await service.deleteTodo(id);
            res.json(todo);
        } catch (err) {
            next(err);
        }
    }
}
