import { TodoRepository } from "../repositories/todo.repository";

const repo = new TodoRepository();

export class TodoService {
    getTodos() {
        return repo.findAll();
    }

    createTodo(text: string) {
        return repo.create(text);
    }

    updateTodo(id: string, completed: boolean) {
        return repo.update(id, completed);
    }
    deleteTodo(id: string) {
        return repo.delete(id);
    }
}
