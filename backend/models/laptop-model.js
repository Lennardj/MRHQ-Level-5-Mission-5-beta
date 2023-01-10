const mongoose = require("mongoose");

const laptopSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpuFamily: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  screenSize: {
    type: String,
    required: true,
  },
  screenResolution: {
    type: String,
    required: true,
  },
  operatingSystem: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Laptop = mongoose.model("laptop", laptopSchema);

module.exports = Laptop;
