const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
};

module.exports = connectDB;
