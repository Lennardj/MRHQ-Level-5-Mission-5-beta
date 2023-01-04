const express = require("express");
// Responsible to get the body off of network requests.
const bodyParser = require("body-parser");
const cors = require("cors");
//
const app = express();
const db = require("./db");
require("dotenv").config();
const port = process.env.PORT;
// laptop router
const laptopRouter = require("./routes/laptop-routes");
// movie router
const movieRouter = require("./routes/movie-router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", laptopRouter);
// movie router
app.use("/api", movieRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
