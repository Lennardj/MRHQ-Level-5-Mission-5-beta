const express = require("express");

const LaptopCtrl = require("../controllers/laptop-ctrl");

const router = express.Router();

router.get("/laptops", LaptopCtrl.getLaptop);

module.exports = router;
