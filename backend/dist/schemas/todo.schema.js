"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoSchema = exports.createTodoSchema = void 0;
const zod_1 = require("zod");
exports.createTodoSchema = zod_1.z.object({
    text: zod_1.z.string().min(1, "Text is required"),
});
exports.updateTodoSchema = zod_1.z.object({
    completed: zod_1.z.boolean(),
});
