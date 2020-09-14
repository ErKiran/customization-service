const express = require("express");
const { Router } = express;
const router = Router();

const { createTheme, getAllAdminThemes } = require("../controllers/themes");

router.post("/theme", createTheme);
router.get("/themes", getAllAdminThemes);

module.exports = router;
