import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
cookieParser;
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", userRoute);

//Error Handler Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errorMessage,
    stack: err.stack,
  });
});

//Success Response Handler Middleware
// app.use((err, req, res, next) => {
//   const statusCode = res.status || 200;
//   const successMessage = res.message || "Success!!";
//   return res.status(statusCode).json({
//     success: false,
//     status: statusCode,
//     message: successMessage,
//     data: res.body,
//   });
// });

const listener = app.listen(8800, () => {
  connect();
  console.log("running on port: " + listener.address().port);
  console.log("connected to backend.");
});
