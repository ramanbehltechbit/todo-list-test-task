import api from "../utils/axiosInstance";
import { Todo } from "../types/todo";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await api.get("/todos");
  return res.data;
};

export const createTodo = async (text: string): Promise<Todo> =>
   {
  console.log(text,"text");

  const res = await api.post("/todos/", { text });
  return res.data;
};

export const updateTodo = async (id: number, completed: boolean) => {
  const res = await api.put(`/todos/${id}`, { completed });
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await api.delete(`/todos/${id}`);
  return res.data;
};
