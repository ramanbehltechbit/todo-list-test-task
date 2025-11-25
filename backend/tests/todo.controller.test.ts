import request from "supertest";
import express from "express";
import { TodoController } from "../src/controller/todo.controller";
import { TodoService } from "../src/services/todo.service";

jest.mock("../services/todo.service");

const MockedService = TodoService as jest.MockedClass<typeof TodoService>;

describe("TodoController - createTodo", () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    const controller = new TodoController();

    app.post("/todos", controller.createTodo.bind(controller));

    app.use((err: any, req: any, res: any, next: any) => {
      if (err.name === "ZodError") {
        return res.status(400).json(err.errors);
      }
      res.status(500).json({ message: "Internal Server Error" });
    });
  });

  it("should create a todo and return 201", async () => {
    MockedService.prototype.createTodo.mockResolvedValue({
      id: "123",
      text: "Test todo",
      completed: false,
    });

    const res = await request(app)
      .post("/todos")
      .send({ text: "Test todo" });

    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      id: "123",
      text: "Test todo",
      completed: false,
    });
  });

  it("should return 400 if text is missing", async () => {
    const res = await request(app)
      .post("/todos")
      .send({}); 

    expect(res.status).toBe(400);
  });
});
