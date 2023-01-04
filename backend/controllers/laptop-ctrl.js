const Laptop = require("../models/laptop-model");

const getLaptop = (req, res) => {
  Laptop.find({}, (err, laptop) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Laptop.length) {
      return res
        .status(404)
        .json({ success: false, error: `Laptop not found` });
    }
    return res.status(200).json({ success: true, data: laptop });
  }).catch((err) => console.log(err));
};

module.exports = {
  getLaptop,
};
