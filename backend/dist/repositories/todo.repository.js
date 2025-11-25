"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const db_1 = __importDefault(require("../config/db"));
class TodoRepository {
    findAll() {
        return db_1.default.todo.findMany();
    }
    create(text) {
        return db_1.default.todo.create({ data: { text } });
    }
    update(id, completed) {
        return db_1.default.todo.update({
            where: { id },
            data: { completed },
        });
    }
}
exports.TodoRepository = TodoRepository;
