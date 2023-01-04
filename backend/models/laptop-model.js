const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Laptop = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("laptops", Laptop);
