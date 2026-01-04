import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 2000;
const app = express();

//Importing Routes

import userRoutes from "./routes/user.js";

//Using Routes

app.use("/api/v1", userRoutes);

app.listen(PORT, async () => {
  await connectDb();
  console.log("Server started successfully at ", PORT);
});
