const mongoose = require("mongoose");

//this will be DB name which will be seen in mongoDB(compass,robo3t etc)
const DB_NAME = "Prodo";
const connectionURI = `${process.env.MONGOURI}/${DB_NAME}`;
//connecting mongoose with the given uri,in this case it is localhost
mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//tracking connection,if error we log error if connecion is successfull(open) we log its connected
const db = mongoose.connection;

db.on("error", () => console.error("error while connecting to mongoDB"));

db.once("open", () => {
  console.log("connected to mongoDB");
});

module.exports = db;
