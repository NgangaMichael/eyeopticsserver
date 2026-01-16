import express from "express";
import routes from "./routes";

const app = express();

// Middleware
app.use(express.json());

// API Routes
app.use("/api", routes);

// Global Error Handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

export default app;
