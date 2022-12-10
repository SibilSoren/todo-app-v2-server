const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
dotenv.config();

// Replace the uri string with your connection string.
const uri = process.env.SERVER_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("todo-app");
    const movies = database.collection("users");

    // Query for a movie that has the title 'Back to the Future'
    // const query = { name: "sibil" };
    // const movie = await movies.findOne(query);
    const query = { name: "Shona1" };
    movies.insertOne(query);

    console.log(movies);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("API is working");
});
