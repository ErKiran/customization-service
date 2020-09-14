const express = require("express");
const { Router } = express;
const router = Router();

const { createTheme } = require("../controllers/themes");

router.post("/theme", createTheme);

module.exports = router;
