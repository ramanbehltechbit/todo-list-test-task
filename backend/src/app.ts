import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.use(errorMiddleware);

export default app;
