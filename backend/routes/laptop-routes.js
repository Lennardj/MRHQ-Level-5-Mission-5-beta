const express = require("express");
const router = express.Router();
const {
  getLaptops,
  getLaptopById,
  createLaptop,
  updateLaptop,
  deleteLaptop,
} = require("../controllers/laptop-ctrl.js");

router.get("/", getLaptops);

router.get("/:id", getLaptopById);

router.post("/", createLaptop);

router.put("/:id", updateLaptop);

router.delete("/:id", deleteLaptop);

module.exports = router;
