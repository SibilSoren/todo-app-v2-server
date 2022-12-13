const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("../src/DB/ConnectDB");
const createUserRoute = require("../src/Routes/CreateUserRoute");
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
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
