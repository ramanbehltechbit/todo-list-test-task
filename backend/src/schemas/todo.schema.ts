import { z } from "zod";

export const createTodoSchema = z.object({
  text: z.string().min(1, "Text is required"),
});

export const updateTodoSchema = z.object({
  completed: z.boolean(),
});

export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;
