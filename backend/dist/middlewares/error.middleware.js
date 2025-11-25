"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const zod_1 = require("zod");
function errorMiddleware(err, req, res, next) {
    console.error(err);
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: "Validation Error",
            errors: err.issues,
        });
    }
    res.status(500).json({ message: "Internal Server Error" });
}
