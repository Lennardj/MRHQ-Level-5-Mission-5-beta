const Laptop = require("../models/laptop-model");

const getLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find({});
    if (!laptops) {
      res
        .status(404)
        .json({ message: "There is no laptop available in this database." });
    }
    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getLaptopById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) {
      res.status(404).send({ message: "laptop not found" });
    } else {
      res.json(laptop);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createLaptop = (req, res) => {
  const body = req.body;
  // input validation
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a laptop to create",
    });
  }

  const laptop = new Laptop(body);

  if (!laptop) {
    return res.status(400).json({ success: false, error: err });
  }
  laptop
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: laptop._id,
        message: "Laptop created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Movie not created!",
      });
    });
};

const updateLaptop = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Laptop.findOne({ _id: req.params.id }, (err, laptop) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Laptop not found!",
      });
    }
    laptop.name = body.name;
    laptop.cpuFamily = body.cpuFamily;
    laptop.memory = body.memory;
    laptop.screenSize = body.screenSize;
    laptop.screenResolution = body.screenResolution;
    laptop.operatingSystem = body.operatingSystem;
    laptop.imageUrl = body.imageUrl;
    laptop.countInStock = body.countInStock;
    laptop.price = body.price;

    laptop
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: laptop._id,
          message: "Laptop updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Laptop not updated!",
        });
      });
  });
};

const deleteLaptop = async (req, res) => {
  await Laptop.findOneAndDelete({ _id: req.params.id }, (err, laptop) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!laptop) {
      return res.status(404).json({ success: false, error: `Movie not found` });
    }

    return res.status(200).json({ success: true, data: laptop });
  }).catch((err) => console.log(err));
};

module.exports = {
  getLaptops,
  getLaptopById,
  createLaptop,
  updateLaptop,
  deleteLaptop,
};
