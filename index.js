//THIS  IS THE ENTRY POINT OF OUR NODEJS APP WHERE WE DEFINE OUR SERVER

//Module imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

require("./config/mongoose");
//initializing the app
const app = express();

//*MIDDLEWARES
//latest version of express it has integrated functionality of bodyparser
app.use(express.json());
//using cors to allow requests from any domain and allowing sending /recieving cookies
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//using express router
app.use("/", require("./routes"));

// custom error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 8000, (err) => {
  err
    ? console.error(" Error connecting to Server")
    : console.info("Connected to Server");
});
