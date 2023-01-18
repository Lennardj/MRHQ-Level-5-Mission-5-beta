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
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// binds to the mongoose server so the output is only one
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Above should be replaced with below if you don't understand
// db.on("open", function () {
//   console.log("MongoDB connected!");
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/laptops", laptopRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
