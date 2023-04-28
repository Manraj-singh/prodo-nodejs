//Module inports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
//initializing the app
const app = express();
const db = require("./config/mongoose");
//middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//latest version of express it has integrated functionality of bodyparser
app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET ,POST ,PUT,DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization,Cookie"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
//using express router
app.options("*", cors());
app.use("/", require("./routes"));

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8001, (err) => {
  err
    ? console.error(" Error connecting to Server")
    : console.log("Connected to Server");
});
