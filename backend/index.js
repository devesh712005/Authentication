import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import { createClient } from "redis";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

// middleware
app.use(cookieParser());
app.use(express.json());

//Redis setup

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  console.log("Missing redis url");
  process.exit(1);
}

export const redisClient = createClient({
  url: redisUrl,
  socket: {
    tls: true,
    rejectUnauthorized: false,
  },
});

redisClient
  .connect()
  .then(() => console.log("connected to redis"))
  .catch(console.error);
const PORT = process.env.PORT || 2000;

//Importing Routes

import userRoutes from "./routes/user.js";
import { create } from "node:domain";

//Using Routes

app.use("/api/v1", userRoutes);

app.listen(PORT, async () => {
  await connectDb();
  console.log("Server started successfully at ", PORT);
});
