import express from "express";
import taskRouter from "./routes/task.routes.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

//initialize express app
const app = express();

app.use(
  cors(
    ({origin : [
      "https://task-manager-tawny-gamma.vercel.app",
      "http://localhost:5173",
    ]})
  )
);
app.use(express.json());

//task routes
app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

//connect to mongodb and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
