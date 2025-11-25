import { Router } from "express";
import { TodoController } from "../controller/todo.controller";

const router = Router();
const controller = new TodoController();

router.get("/", controller.getTodos.bind(controller));
router.post("/", controller.createTodo.bind(controller));
router.put("/:id", controller.updateTodo.bind(controller));
router.delete("/:id", controller.deleteTodo.bind(controller));

export default router;
