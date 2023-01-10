require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongodb connected....");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
    process.exit(1);
  });

const db = mongoose.connection;

module.exports = db;
