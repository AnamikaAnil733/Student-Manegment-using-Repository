import express from "express";

import dotenv from "dotenv";
import { connectDB } from "./config/db";
import adminRoutes from "./routes/adminRouts";
import studentRoutes from "./routes/student.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
