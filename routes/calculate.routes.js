const express = require("express");
const router = express.Router();

const { calculateMass } = require("../controllers/calculate.controller");

router.route("/").post(calculateMass);

module.exports = router;
