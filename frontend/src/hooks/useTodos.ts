import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todoApi";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const addTodo = async (text: string) => {
    if (!text.trim()) return;
    const newTodo = await createTodo(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = async (id: number) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    const updated = await updateTodo(id, !todo.completed);
    setTodos(prev =>
      prev.map(t => t.id === id ? updated : t)
    );
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}
