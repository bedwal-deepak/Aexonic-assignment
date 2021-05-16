const express = require("express");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("HELLO WORLD!!!");
  next();
});

//it is a middleware which can modify the incoming request's data or it will change that data to javascript object
app.use(express.json());

//mounting of router
app.use("/api/v1/loginapi", userRouter);

// HANDLING UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//IMPLEMENTING A GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
