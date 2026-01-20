import express from "express";
import cors from 'cors';
import routes from "./routes";
import { CLIENT_URL, NODE_ENV } from "./config/env";

const app = express();

/* ---------------- CORS ---------------- */
app.use(
  cors({
    origin:
      NODE_ENV === "development"
        ? "http://localhost:5173"
        : CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ----------- Middleware ----------- */
app.use(express.json());

/* ----------- Routes ----------- */
app.use("/api", routes);

/* ----------- Error Handler ----------- */
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

export default app;
