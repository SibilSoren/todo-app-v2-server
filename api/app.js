const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("../src/DB/ConnectDB");
const cors = require("cors");
const createUserRoute = require("../src/Routes/CreateUserRoute");
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//connecting to DB
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/createUser", createUserRoute);
app.get("/", (req, res) => {
  res.send("API is working");
});
